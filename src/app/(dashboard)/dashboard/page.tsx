import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getLessons } from "@/features/lessons/server/data/getLesson";
import { getTutorialCount } from "@/features/tutorials/server/data/tutorial.data";
import { getUserCount } from "@/features/users/server/data/user.data";
import { Users, BookOpen, Video } from "lucide-react";

const DashboardHome = async () => {
  const tutorials = await getTutorialCount();
  const users = await getUserCount();
  const lessons = await getLessons();

  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
      {/* Total Users Card */}
      <Card className="border border-gray-200 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-6 w-6 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{users.count || 0}</p>
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
          <p className="text-2xl font-bold">{lessons?.data.length || 0}</p>
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
          <p className="text-2xl font-bold">{tutorials.count || 0}</p>
          <p className="text-xs text-muted-foreground">Tutorials available</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
