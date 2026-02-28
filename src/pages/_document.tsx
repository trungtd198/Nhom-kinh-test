import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Nhôm Kính Template',
      description:
        'Chuyên thi công cửa nhôm kính Xingfa, vách kính cường lực, lan can kính, cửa kính tự động tại Hà Nội.',
      url: 'https://nhomkinhtemplate.vn',
      telephone: '0987654321',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hà Nội',
        addressRegion: 'Hà Nội',
        addressCountry: 'VN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '21.0285',
        longitude: '105.8542',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '07:00',
          closes: '18:00',
        },
      ],
      sameAs: ['https://www.facebook.com/nhomkinhtemplate'],
    };

    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
