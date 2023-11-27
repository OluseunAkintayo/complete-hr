import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";
import Performance from "./Performance";
import Leave from "./Leave";
import Remuneration from "./Remuneration";

export default function UserTabs() {
  return (
    <Tabs defaultValue="leave">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="leave">Leave</TabsTrigger>
        <TabsTrigger value="remuneration">Remuneration</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Overview />
      </TabsContent>
      <TabsContent value="performance">
        <Performance />
      </TabsContent>
      <TabsContent value="leave">
        <Leave />
      </TabsContent>
      <TabsContent value="remuneration">
        <Remuneration />
      </TabsContent>
    </Tabs>
  );
}
