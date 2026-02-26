import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Nhôm Kính Gia Phát',
      description:
        'Chuyên thi công cửa nhôm kính Xingfa, vách kính cường lực, lan can kính, cửa kính tự động tại TP.HCM.',
      url: 'https://nhomkinhgiaphat.vn',
      telephone: '0901234567',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thành phố Hồ Chí Minh',
        addressRegion: 'TP.HCM',
        addressCountry: 'VN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '10.7769',
        longitude: '106.7009',
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
      sameAs: ['https://www.facebook.com/nhomkinhgiaphat'],
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
