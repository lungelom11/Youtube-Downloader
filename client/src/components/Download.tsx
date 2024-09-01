import {Button, Input, InputAddon, InputGroup, Stack} from "@chakra-ui/react"

const Download = () => {
  return (
    <div className="download">
        <Stack spacing={4}>
          <InputGroup size="lg" minW="600px">
            <InputAddon>Url</InputAddon>
            <Input  placeholder='Paste URL Here' />
          </InputGroup>

          <Button w="200px" mx="auto" colorScheme="green" size="lg">Download</Button>
        </Stack>


    </div>
  )
}

export default Download