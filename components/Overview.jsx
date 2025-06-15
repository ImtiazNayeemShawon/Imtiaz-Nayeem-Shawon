import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Clock, TrendingUp } from "lucide-react";

export const Overview = () => {
  const challenges = [
    "Real-time collaboration across distributed teams",
    "Scalable architecture for growing user base",
    "Complex state management and data synchronization",
    "Performance optimization for large datasets",
  ];

  const solutions = [
    "WebSocket implementation for real-time updates",
    "Microservices architecture with proper caching",
    "Redux Toolkit with RTK Query for state management",
    "Virtual scrolling and lazy loading optimizations",
  ];

  return (
    <section className="py-20 bg-grid-[#19191952]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-white">
            Project Overview
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Solving Real-World Problems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TaskFlow Pro addresses the critical need for efficient project
            management in modern distributed teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-destructive" />
                <CardTitle className="text-destructive">Challenges</CardTitle>
              </div>
              <CardDescription>
                Key problems identified in the market research phase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive/60 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <CardTitle className="text-green-600">Solutions</CardTitle>
              </div>
              <CardDescription>
                Technical approaches implemented to address challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600/60 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-3 text-" />
              <div className="text-2xl font-bold mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 mx-auto mb-3 text-" />
              <div className="text-2xl font-bold mb-1">6 Months</div>
              <div className="text-sm text-muted-foreground">
                Development Time
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-6">
              <Target className="h-8 w-8 mx-auto mb-3 text-" />
              <div className="text-2xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 " />
              <div className="text-2xl font-bold mb-1">40%</div>
              <div className="text-sm text-muted-foreground">
                Performance Boost
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
