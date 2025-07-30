import { Request, Response } from 'express';
import { escape, trim, stripLow } from 'validator';
import * as yup from 'yup';

import Contact from '../models/contact.schema';

export const createContact = async (req: Request, res: Response) => {
  const contactSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: yup.string().optional(),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
  });

  try {
    let validatedData;
    try {
      validatedData = await contactSchema.validate(req.body, {
        abortEarly: false,
      });
    } catch (validationError: any) {
      const message =
        validationError.errors && validationError.errors.length
          ? validationError.errors.join(', ')
          : validationError.message || 'Validation error';
      return res.status(400).json({ error: message });
    }

    const sanitizedData = {
      name: escape(trim(stripLow(validatedData.name))),
      email: escape(trim(validatedData.email)),
      phone: validatedData.phone ? escape(trim(validatedData.phone)) : '',
      subject: escape(trim(validatedData.subject)),
      message: escape(trim(stripLow(validatedData.message))),
    };
    const contact = new Contact(sanitizedData);
    await contact.save();

    return res
      .status(200)
      .json({ message: 'Contact message submitted successfully.' });
  } catch (error) {
    console.error('Error creating contact:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
