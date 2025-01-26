import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Video } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
      {/* Total Users Card */}
      <Card className="border border-gray-200 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-6 w-6 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1,234</p>
          <p className="text-xs text-muted-foreground">Active users</p>
        </CardContent>
      </Card>

      {/* Total Lessons Card */}
      <Card className="border border-gray-200 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Lessons</CardTitle>
          <BookOpen className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">456</p>
          <p className="text-xs text-muted-foreground">Lessons available</p>
        </CardContent>
      </Card>

      {/* Total Vocabulary Card */}
      <Card className="border border-gray-200 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tutorial</CardTitle>
          <Video className="h-6 w-6 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-muted-foreground">Tutorials available</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
