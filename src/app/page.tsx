import { Button } from "@shared/ui/shadcn/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@shared/ui/shadcn/ui/card"

export default function DashboardPage() {
   return (
      <div className="space-y-6">
         <div className="flex items-center justify-between">
            <div>
               <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
               <p className="text-muted-foreground">
                  Welcome to your dashboard. Here is your overview.
               </p>
            </div>
            <Button>Quick Action</Button>
         </div>

         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
               </CardContent>
            </Card>

            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
               </CardContent>
            </Card>

            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
               </CardContent>
            </Card>

            <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
               </CardContent>
            </Card>
         </div>

         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
               <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                     You can add components to your page using these placeholders.
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-muted-foreground">
                     This is the content area for your dashboard. You can add charts,
                     tables, or other widgets here.
                  </p>
               </CardContent>
            </Card>
            <Card className="col-span-3">
               <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                     You will see a list of recent activities here.
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="space-y-4">
                     <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <div className="ml-3 space-y-1">
                           <p className="text-sm font-medium">New user registered</p>
                           <p className="text-xs text-muted-foreground">Just now</p>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <div className="ml-3 space-y-1">
                           <p className="text-sm font-medium">New order received</p>
                           <p className="text-xs text-muted-foreground">5 minutes ago</p>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}
