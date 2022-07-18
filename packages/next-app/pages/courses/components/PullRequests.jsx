import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Blockies from "react-blockies";
import truncateMiddle from "truncate-middle";
import { useRouter } from "next/router";

function PullRequests({ setLoading, id }) {
  const router = useRouter();

  const lists = [
    {
      heading: "Add new module",
      description:
        "Tummy tickling is a crucial part of forming a bond with your kitten, students of this course should be aware of it. This PR adds a module on tummy tickling for this reason.",
      status: "approved",
    },
    {
      heading: "Add new module",
      description:
        "Tummy tickling is a crucial part of forming a bond with your kitten, students of this course should be aware of it. This PR adds a module on tummy tickling for this reason.",
      status: "open",
    },
  ];
  return (
    <>
      <Flex
        mt={"3.5em"}
        mb={"0.5em"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"}>
          <Heading fontSize={"34px"} fontWeight={600}>
            Pull Requests
          </Heading>
          <Text
            w={"2rem"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={"1.2rem"}
            lineHeight={"2rem"}
            bg={"black"}
            color={"white"}
            textAlign={"center"}
            borderRadius={"50%"}
            ml={"0.75rem"}
            fontWeight={600}
          >
            {lists?.length}
          </Text>
        </Flex>

        <Button
          borderWidth={"2px"}
          borderColor={"rgb(10 10 10/1)"}
          borderRadius={"0.625rem"}
          bg={"rgb(10 10 10/1)"}
          py={"0.375rem"}
          px={"1rem"}
          colorScheme={"black"}
          onClick={() => {
            setLoading(true);
            router.push(`/courses/${id}/requests/new`);
          }}
        >
          New Request
        </Button>
      </Flex>
      <Divider />

      {lists &&
        lists?.map((list, index) => {
          return (
            <Box
              borderWidth={"2px"}
              borderColor={"rgb(10 10 10/1)"}
              borderRadius={"0.625rem"}
              p={"1em"}
              mt={"1rem"}
              key={index}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Text
                  borderWidth={"2px"}
                  borderColor={"rgb(10 10 10/1)"}
                  alignItems={"center"}
                  borderRadius={"9999px"}
                  py={"0.25rem"}
                  px={"0.75rem"}
                  textTransform={"uppercase"}
                  fontSize={"0.75rem"}
                  lineHeight={"1rem"}
                  fontWeight={600}
                  bg={
                    list.status === "approved"
                      ? "rgb(183 234 213)"
                      : "rgb(250 229 195)"
                  }
                >
                  {list.status}
                </Text>
                <Flex
                  borderWidth={"2px"}
                  borderColor={"rgb(10 10 10/1)"}
                  alignItems={"center"}
                  borderRadius={"0.3125rem"}
                  bg={"rgb(198 201 246)"}
                  py={"0.25rem"}
                  px={"0.75rem"}
                  w={"max-content"}
                >
                  <Box
                    borderRadius={"50%"}
                    borderWidth={"1.5px"}
                    borderColor={"rgb(10 10 10/1)"}
                    overflow={"hidden"}
                  >
                    <Blockies
                      seed={"0x7b1C1702A09521b4160f79f853b7F54ba6b35a59"}
                      color="#dfe"
                      bgcolor="#aaa"
                      default="-1"
                      size={10}
                      scale={2}
                    />
                  </Box>
                  <Text
                    ml={"10px"}
                    fontSize={"0.75rem"}
                    lineHeight={"1rem"}
                    fontWeight={600}
                  >
                    {truncateMiddle(
                      "0x7b1C1702A09521b4160f79f853b7F54ba6b35a59" || "",
                      5,
                      4,
                      "..."
                    )}
                  </Text>
                </Flex>
              </Flex>

              <Heading mt={"1em"} fontWeight={500} fontSize={"24px"}>
                {list.heading}
              </Heading>
              <Text
                fontSize={"16px"}
                mt={"10px"}
                mb={"1.2em"}
                color={"#888888"}
              >
                {list.description}
              </Text>

              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Box
                  borderWidth={"2px"}
                  borderColor={"rgb(10 10 10/1)"}
                  alignItems={"center"}
                  borderRadius={"0.3125rem"}
                  py={"0.25rem"}
                  px={"0.75rem"}
                  bg={"#FFBDAA"}
                >
                  <Text fontWeight={500}>1 vote</Text>
                </Box>
                <Button
                  borderWidth={"2px"}
                  borderColor={"rgb(10 10 10/1)"}
                  borderRadius={"0.625rem"}
                  bg={"rgb(10 10 10/1)"}
                  py={"0.375rem"}
                  px={"1rem"}
                  colorScheme={"black"}
                  onClick={() => {
                    setLoading(true);
                    router.push(`/courses/${id}/requests/${index}`);
                  }}
                >
                  View
                </Button>
              </Flex>
            </Box>
          );
        })}
    </>
  );
}

export default PullRequests;
