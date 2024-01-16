import { users } from "@/data/data";
import { Restaurant, User } from "@/utils/types";
import { DashboardStore } from "@/zustand/dashboard";
import { GeneralStore } from "@/zustand/general";
import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Card,
  Center,
  Flex,
  Footer,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Space,
  Text,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { current } from "immer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  const [navbarOpened, setNavbarOpened] = useState(false);

  const itemList = DashboardStore((state) => state.itemList);
  const currentUser = GeneralStore((state) => state.currentUser);
  const ImageComponent = ({ url }: { url: string }) => {
    if (url) {
      try {
        const image = JSON.parse(url) as StaticImageData;
        return <Image src={image} alt="image" width={100} height={100} />;
      } catch (error) {
        console.error("Failed to parse image URL as JSON:", error);
      }
    }

    return <></>;
  };

  console.log("currentUser", currentUser);

  if (!currentUser) {
    return (
      <Center h={400}>
        <Link href="/sign-in">
          <Card>Please sign in</Card>
        </Link>
      </Center>
    );
  }
  console.log("list", itemList);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Box
          // hiddenBreakpoint="sm"
          // hidden={!navbarOpened}
          // width={{ sm: 200, lg: 300 }}
          w={250}
          p={10}
          bg="white"
        >
          {itemList.map((v, i) => (
            <Link
              href={`/dashboard/restaurant/${v.name}`}
              key={i}
              className="no-underline"
            >
              <Flex
                gap="sm"
                p="md"
                align="center"
                sx={{
                  ":hover": { background: "#FFD8A8" },
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Avatar color="cyan" radius="xl">
                  {v.imageUrl ? <ImageComponent url={v.imageUrl} /> : "M"}
                </Avatar>
                <Box
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Text fw="bold">{v.name}</Text>
                  <Text
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v.description}
                  </Text>
                </Box>
              </Flex>
            </Link>
          ))}
        </Box>
      }
      footer={
        <Footer height="fit-content" p="md">
          <Box
            sx={{
              paddingTop: theme.spacing.sm,
              borderTop: `${rem(1)} solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.gray[2]
              }`,
            }}
          >
            <UnstyledButton
              sx={{
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black,

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                },
              }}
            >
              <Group>
                <Avatar radius="xl">
                  <Image
                    src={currentUser!.avatarUrl}
                    width={50}
                    alt="profile"
                  ></Image>
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Text size="lg" weight={500}>
                    {currentUser!.name}
                  </Text>
                </Box>

                {theme.dir === "ltr" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                  </svg>
                )}
              </Group>
            </UnstyledButton>
          </Box>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={navbarOpened}
                onClick={() => setNavbarOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Link href="/" className="no-underline">
              <Text fz="lg" fw={700} color="orange" mr={20}>
                HOME
              </Text>
            </Link>
            <Link href="/dashboard/restaurant" className="no-underline">
              <Text fz="lg" fw={700} color="orange">
                Post
              </Text>
            </Link>
            <Space w={10} />
          </div>
        </Header>
      }
    >
      <Center w="100%" h="100%">
        {children}
      </Center>
    </AppShell>
  );
}
