import { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';

import theme from '@/config/themeConfig';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}

export default CustomApp;
