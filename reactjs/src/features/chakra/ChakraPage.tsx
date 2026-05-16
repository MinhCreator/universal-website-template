import {
  Box,
  Heading,
  Button,
  Text,
  Input,
  HStack,
  Wrap,
  Card,
  Switch,
  Slider,
  Tag,
  Alert,
  Field,
} from "@chakra-ui/react";

export function ChakraPage() {
  return (
    <Box maxW="4xl" mx="auto">
      <Heading as="h1" size="2xl" mb={2}>
        Chakra UI
      </Heading>
      <Text color="gray.500" mb={6}>
        Components from the Chakra UI library &mdash; chakra-ui.com
      </Text>

      <Box display="flex" flexDirection="column" gap={4}>
        <Card.Root>
          <Card.Header>
            <Heading size="md">Inputs</Heading>
          </Card.Header>
          <Card.Body>
            <HStack gap={2} flexWrap="wrap">
              <Button colorPalette="blue">Solid</Button>
              <Button variant="outline" colorPalette="blue">
                Outline
              </Button>
              <Button variant="ghost" colorPalette="blue">
                Ghost
              </Button>
            </HStack>
            <Field.Root>
              <Input placeholder="Enter text..." mt={3} />
            </Field.Root>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Heading size="md">Toggles &amp; Sliders</Heading>
          </Card.Header>
          <Card.Body>
            <HStack gap={4}>
              <Switch.Root defaultChecked>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Root>
              <Box width="200px">
                <Slider.Root defaultValue={[50]}>
                  <Slider.Control>
                    <Slider.Track>
                      <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumb index={0} />
                  </Slider.Control>
                </Slider.Root>
              </Box>
            </HStack>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Heading size="md">Tags &amp; Alerts</Heading>
          </Card.Header>
          <Card.Body>
            <Wrap gap={2} mb={3}>
              <Tag.Root colorPalette="blue">
                <Tag.Label>React</Tag.Label>
              </Tag.Root>
              <Tag.Root colorPalette="green">
                <Tag.Label>Chakra UI</Tag.Label>
              </Tag.Root>
              <Tag.Root variant="outline" colorPalette="gray">
                <Tag.Label>TypeScript</Tag.Label>
              </Tag.Root>
            </Wrap>
            <Alert.Root status="success" variant="subtle" borderRadius="md">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Chakra UI is working correctly!</Alert.Title>
              </Alert.Content>
            </Alert.Root>
          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  );
}
