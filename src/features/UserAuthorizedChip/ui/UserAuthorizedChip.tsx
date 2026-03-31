import { UserChip } from "@entities/User"
import { Button } from "@shared/ui/shadcn/ui/button"

export const UserAuthorizedChip: React.FC = () => {
   return (
      <UserChip data={{ email: "email@gmail.com", name: "User 3123123" }}>
         <Button>Logout</Button>
      </UserChip>
   )
}
