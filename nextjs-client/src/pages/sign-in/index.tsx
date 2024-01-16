import GlobalLayout from "@/layouts/GlobalLayout";
import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Group,
  Loader,
  Text,
  Title,
} from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import { ReactElement, useState } from "react";
import Customer from "../../../public/customer.jpg";

import Restaurant from "../../../public/restaurant1.jpg";
import Admin from "../../../public/admin.jpg";
import { useRouter } from "next/router";
import { GeneralStore } from "@/zustand/general";
import { restaurants, users } from "@/data/data";

const SignUpComponent = ({
  name,
  image,
}: {
  name: "Customer" | "Restaurant" | "Admin";
  image: StaticImageData;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setUser = GeneralStore((state) => state.setCurrentUser);

  const handleClick = (name: string) => {
    setLoading(true);

    setTimeout(() => {
      if (name === "Restaurant") {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        const randomRestaurant = restaurants[randomIndex];
        localStorage.setItem("user", randomRestaurant.id);
        setUser(randomRestaurant);
        router.push("/dashboard/restaurant");
      }
      if (name === "Customer") {
        const randomIndex = Math.floor(Math.random() * users.length);

        const randomCustomer = users[randomIndex];
        localStorage.setItem("user", randomCustomer.id);
        setUser(randomCustomer);
        router.push("/marketplace");
      }
      if (name === "Admin") {
        const randomIndex = Math.floor(Math.random() * users.length);
        const randomAdmin = users[randomIndex];
        localStorage.setItem("user", randomAdmin.id);
        setUser(randomAdmin);
        router.push("/dashboard/admin");
      }

      setLoading(false);
    }, 1000); // 2000 milliseconds (2 seconds) delay before router.push is called
  };
  return (
    <Card shadow="sm" w={300} h={400} padding="lg" radius="md" withBorder>
      <Card.Section></Card.Section>

      <Group
        position="apart"
        mt="md"
        mb="xs"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Text weight={500}>{name}</Text>
      </Group>
      <Center w="100%" h="70%">
        <Image src={image} width={200} height={200} alt={name} />
      </Center>

      <Button
        variant="filled"
        color="orange"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => handleClick(name)}
      >
        {loading ? <Loader color="white" size={"sm"} /> : "Sign in"}
      </Button>
    </Card>
  );
};
export default function SignIn() {
  return (
    <Center w="100%" h="100%">
      <Box w="80%" mt={200}>
        <Center w="100%" mb={50}>
          <Title order={1}>Sign in</Title>

          <Title order={1} pl={10} color="orange">
            as
          </Title>
        </Center>
        <Center sx={{ gap: 20 }}>
          <SignUpComponent name="Customer" image={Customer} />

          <SignUpComponent name="Restaurant" image={Restaurant} />

          <SignUpComponent name="Admin" image={Admin} />
        </Center>
      </Box>
    </Center>
  );
}

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <GlobalLayout>{page}</GlobalLayout>;
};
