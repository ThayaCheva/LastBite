import { restaurants } from "@/data/data";
import { supabase } from "@/supabaseClient";
import { LeftOverItem } from "@/utils/types";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Input,
  Modal,
  Space,
  Text,
  Title,
} from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import cartIcon from "../../../public/cart-icon.png";
import searchIcon from "../../../public/search-icon.png";
import Checkout from "@/components/Checkout";
import { CheckoutStore } from "@/zustand/checkout";
import { useDisclosure } from "@mantine/hooks";

const ImageComponent = ({
  url,
  width,
  height,
}: {
  url: string;
  width: number;
  height: number;
}) => {
  if (url) {
    try {
      const image = JSON.parse(url) as StaticImageData;
      return <Image src={image} width={width} height={height} alt="image" />;
    } catch (error) {
      console.error("Failed to parse image URL as JSON:", error);
    }
  }

  return <></>;
};
export default function Marketplace() {
  const [leftOvers, setLeftOvers] = useState<LeftOverItem[] | null>(null);
  const [checkoutState, setCheckoutState] = useState<Boolean | null>(false);
  const [opened, { open, close }] = useDisclosure(false);
  const addItem = CheckoutStore((state) => state.addItem);
  const leftOverItems = CheckoutStore((state) => state.itemList);
  const clearCheckout = CheckoutStore((state) => state.clearCheckout);
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("last-bite").select("*");
      setLeftOvers(data as LeftOverItem[] | null);
    };
    fetch();
  }, []);
  console.log("leftOvers", leftOvers);
  return (
    <Box w="100%" h="100%">
      {checkoutState && <Checkout />}
      <Flex sx={{ alignItems: "center" }} w="100%" h={80} bg="orange.5">
        <Link href="/" className="no-underline">
          <Flex ml={100}>
            <Title order={1}>Last</Title>
            <Title order={1} color="white">
              Bite
            </Title>
          </Flex>
        </Link>

        <Flex ml={100} gap={50}>
          <Link href="/" className="no-underline">
            <Text fz="lg" fw="bold" color="white">
              Home
            </Text>
          </Link>

          <Text fz="lg" fw="bold" color="white">
            Support
          </Text>
          <Space w={300} />
          {/* <>
            <Modal opened={opened} onClose={close} title="Checkout">
              {leftOverItems.map((item) => (
                <Card key={item.id} sx={{ display: "flex" }}>
                  <ImageComponent
                    url={item.imageUrl}
                    width={100}
                    height={100}
                  />
                  <Box ml={10}>
                    <Text fw="bold">{item.name}</Text>

                    <Text>{item.description}</Text>
                  </Box>
                  <Space w={200} />

                  <Text fz="lg" fw="bold">
                    {item.quantity}
                  </Text>
                </Card>
              ))}
              <Button
                variant="filled"
                color="orange"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => {
                  clearCheckout();
                  close();
                }}
              >
                <Text color="white">Place order</Text>
              </Button>
            </Modal>

            <Group position="center">
              <Button
                bg="white"
                sx={{ ":hover": { backgroundColor: "orange" } }}
                onClick={open}
              >
                <Text pr={5}>{leftOverItems.length}</Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
                    fill="rgba(0,0,0,1)"
                  ></path>
                </svg>
              </Button>
            </Group>
          </> */}
          <Button
            w={80}
            radius={50}
            bg="white"
            onClick={() => setCheckoutState((val) => !val)}
          >
            <Image src={cartIcon} alt="cart-icon" height={20} />
            <Space w={10} />
            <Text color="black" fz={20} c="grey">
              2
            </Text>
          </Button>
          <Input
            icon={<Image src={searchIcon} alt="search-icon" height={16} />}
            placeholder="Search nearby kitchen and stores"
            radius={50}
            w={300}
          />
        </Flex>
      </Flex>
      <Box mt={20}>
        <Flex ml={100}>
          <Title order={1}>New</Title>
          <Title order={1} color="orange" ml={10}>
            Listing
          </Title>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          ml={100}
          mt={10}
          sx={{ gap: 10, flexWrap: "wrap" }}
        >
          {leftOvers &&
            leftOvers.map((item) => (
              <Card
                shadow="sm"
                key={item.id}
                padding="lg"
                radius="md"
                withBorder
                w={200}
                h={320}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <Card.Section>
                  {/* {item && (
                    <Image
                      src={JSON.parse(item.imageUrl) || ""}
                      width={200}
                      height={200}
                      alt="image"
                    />
                  )} */}
                  <ImageComponent
                    url={item.imageUrl}
                    width={200}
                    height={150}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item?.name}</Text>
                </Group>

                <Text
                  h={20}
                  size="sm"
                  color="dimmed"
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item?.description}
                </Text>
                <Text size="sm" color="dimmed" fw="bold">
                  {item?.quantity}
                </Text>
                <Button
                  variant="light"
                  color="orange"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => addItem(item)}
                >
                  add
                </Button>
              </Card>
            ))}
        </Flex>
        <Flex ml={100} mt={20}>
          <Title order={1}>Near by</Title>
          <Title order={1} color="orange" ml={10}>
            Stores
          </Title>
        </Flex>
        <Flex sx={{ gap: 10, flexWrap: "wrap" }} ml={100}>
          {restaurants &&
            restaurants.map((item) => (
              <Card
                shadow="sm"
                key={item.name}
                padding="lg"
                radius="md"
                withBorder
                w={200}
                h={300}
              >
                <Card.Section>
                  {item && (
                    <Image
                      src={item.avatarUrl}
                      width={200}
                      height={200}
                      alt="image"
                    />
                  )}
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{item?.name}</Text>
                </Group>
              </Card>
            ))}
        </Flex>
      </Box>
    </Box>
  );
}
