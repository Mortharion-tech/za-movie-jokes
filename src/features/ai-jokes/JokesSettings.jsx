import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

function JokesSettings() {
  const rules = useSelector((state) => state.aiJokes.rules);
  const [form, setForm] = useState({ name: "", description: "" });

  const handleRuleRemove = (ruleName) => {
    /* const ruleIndex = rules.findIndex((rule) => rule.name === ruleName);
    if (ruleIndex < 0) return;

    const newRules = [...rules];
    newRules.splice(ruleIndex, 1);

    setRules(newRules); */
  };
  const handleAddRule = (event) => {
    event.preventDefault();
    /* setRules([...rules, form]); */
  };

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button leftIcon={<SettingsIcon />} variant="solid">
          Settings
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Joke Rules</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex width="100%" direction="column">
              {rules.map((rule) => (
                <Flex
                  key={rule.name}
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Text>
                    <Badge mr={2} colorScheme="purple">
                      {rule.name}
                    </Badge>
                    <small>{rule.description}</small>
                  </Text>
                  <IconButton
                    onClick={() => handleRuleRemove(rule.name)}
                    variant="outline"
                    icon={<DeleteIcon />}
                    size="sm"
                  />
                </Flex>
              ))}
            </Flex>
          </PopoverBody>
          <PopoverFooter>
            <form onSubmit={handleAddRule}>
              <FormControl isRequired>
                <InputGroup size="sm" mb={2}>
                  <InputLeftAddon>Name:</InputLeftAddon>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                  />
                </InputGroup>
              </FormControl>{" "}
              <FormControl isRequired>
                <InputGroup size="sm" mb={2}>
                  <InputLeftAddon>Description:</InputLeftAddon>
                  <Input
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    type="text"
                  />
                </InputGroup>
              </FormControl>
              <Button size="sm" type="submit" alignSelf="flex-end">
                Submit
              </Button>
            </form>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default JokesSettings;
