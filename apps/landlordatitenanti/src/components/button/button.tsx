import { Button, ButtonProps } from 'antd';
import classNames from 'classnames';

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outlined';
}

const PrimaryButton = ({
  children,
  onClick,
  className,
  variant = 'primary',
  ...props
}: PrimaryButtonProps) => {
  const buttonClass = classNames(className, {
    '!bg-primary !text-white hover:!bg-primary !border !border-transparent':
      variant === 'primary',
    '!border !border-primary !text-primary hover:!bg-primary hover:!text-white':
      variant === 'outlined',
  });

  return (
    <Button onClick={onClick} className={`${buttonClass}`} {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
