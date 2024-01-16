import DashboardLayout from "@/layouts/DashboardLayout";
import GlobalLayout from "@/layouts/GlobalLayout";
import { supabase } from "@/supabaseClient";
import { LeftOverItem } from "@/utils/types";
import { Badge, Card, Center, Group, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

export default function Leftover() {
  const router = useRouter();
  const { name } = router.query;
  const [leftOverItem, setLeftOverItem] = useState<LeftOverItem | undefined>(
    undefined
  );
  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("last-bite")
        .select("*")
        .eq("name", name);
      setLeftOverItem(data![0] as LeftOverItem);
    };
    fetch();
  }, [name]);
  return (
    <Center w="100%" h="100%">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          {leftOverItem && (
            <Image
              src={JSON.parse(leftOverItem.imageUrl) || ""}
              width={400}
              height={400}
              alt="image"
            />
          )}
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{leftOverItem?.name}</Text>
        </Group>

        <Text size="sm" color="dimmed">
          {leftOverItem?.description}
        </Text>
      </Card>
    </Center>
  );
}
Leftover.getLayout = function getLayout(page: ReactElement) {
  return (
    <GlobalLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </GlobalLayout>
  );
};
