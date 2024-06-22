import {
  BlockStack,
  reactExtension,
  Text,
  Heading,
  Image,
  Link
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
const thankyouBlock = reactExtension(
  'purchase.thank-you.block.render',
  () => <Extension />,
);

export { thankyouBlock }

const orderStatusBlock = reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

export { orderStatusBlock }

function Extension() {
  // 2. Use the extension API to gather context from the checkout and shop
  // 3. Render a UI
  return (
    <BlockStack>
      <Heading level={1}>Payment</Heading>
      <Text>If you have not paid yet, you can you can pay us through UPI to the following phone number.</Text>
      <Text emphasis='bold' size='medium'>9113686752</Text>
      <Text>The name in the UPI app should appear as <Text emphasis='italic'> Vinayaka K V/ Nagarathna K S</Text></Text>
      <Text>Otherwise, you can also directly scan the below QR code</Text>
      <Image source="https://cdn.shopify.com/s/files/1/0797/3774/9792/files/2024-06-12_20.12.28.jpg?v=1718203438" />
      <Text>Please text us at our <Link to="https://wa.me/919113686752" external>Whatsapp (9113686752)</Link> once you make the payment or have any questions.</Text>
    </BlockStack>
  );
}
