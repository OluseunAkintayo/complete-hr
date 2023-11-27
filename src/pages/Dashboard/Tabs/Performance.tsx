import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Performance = () => {
  return (
    <Card style={{ height: "calc(100vh - 320px)", overflowY: "auto" }}>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
    </Card>
  );
};

export default Performance;
