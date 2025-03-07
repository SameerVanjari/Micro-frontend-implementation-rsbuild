import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BarChart, Clock, FileText, Users } from "lucide-react";
import { Progress } from "./ui/progress";

const Dashboard = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Tasks
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Team Members
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">+1 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Hours Logged
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">
                  +12 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completion Rate
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">
                  +4% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
                <CardDescription>
                  Track the overall progress of your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Design</div>
                    <div className="text-sm text-muted-foreground">85%</div>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Development</div>
                    <div className="text-sm text-muted-foreground">62%</div>
                  </div>
                  <Progress value={62} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Testing</div>
                    <div className="text-sm text-muted-foreground">45%</div>
                  </div>
                  <Progress value={45} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Documentation</div>
                    <div className="text-sm text-muted-foreground">30%</div>
                  </div>
                  <Progress value={30} />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "Alex",
                      action: "completed task",
                      item: "Update homepage design",
                      time: "2 hours ago",
                    },
                    {
                      user: "Sarah",
                      action: "commented on",
                      item: "API integration issue",
                      time: "5 hours ago",
                    },
                    {
                      user: "Mike",
                      action: "created task",
                      item: "Implement dark mode",
                      time: "Yesterday",
                    },
                    {
                      user: "Lisa",
                      action: "updated",
                      item: "Project timeline",
                      time: "2 days ago",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 text-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="grid gap-1">
                        <p>
                          <span className="font-medium">{activity.user}</span>{" "}
                          <span className="text-muted-foreground">
                            {activity.action}
                          </span>{" "}
                          <span className="font-medium">{activity.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="analytics"
          className="h-[400px] flex items-center justify-center text-muted-foreground"
        >
          Analytics content would go here
        </TabsContent>
        <TabsContent
          value="reports"
          className="h-[400px] flex items-center justify-center text-muted-foreground"
        >
          Reports content would go here
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Dashboard;
