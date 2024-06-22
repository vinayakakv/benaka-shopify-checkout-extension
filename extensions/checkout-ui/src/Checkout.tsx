import {
  BlockStack,
  reactExtension,
  Text,
  useApi,
  Heading,
  Image,
  Banner
} from '@shopify/ui-extensions-react/checkout';
import { useState } from 'react';

// 1. Choose an extension target
export default reactExtension(
  'purchase.thank-you.block.render',
  () => <Extension />,
);

function Extension() {
  // 2. Use the extension API to gather context from the checkout and shop
  const res = useApi();
  const [showBanner, setShowBanner] = useState(false)
  console.log(res)
  // 3. Render a UI
  return (
    <BlockStack>
      {showBanner && <Banner status='success' title='Successfully copied the UPI number to clip board.' onDismiss={() => setShowBanner(false)} />}
      <Heading level={1}>Payment</Heading>
      <Text>If you have not paid yet, you can you can pay us through UPI to the following phone number.</Text>
      <Text emphasis='bold' size='medium'>9113686752</Text>
      <Text>The name in the UPI app should appear as <Text emphasis='italic'> Vinayaka K V/ Nagarathna K S</Text></Text>
      <Text>Otherwise, you can also directly scan the below QR code</Text>
      <Image source="https://cdn.shopify.com/s/files/1/0797/3774/9792/files/2024-06-12_20.12.28.jpg?v=1718203438" />
    </BlockStack>
  );
}
