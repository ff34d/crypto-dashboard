import { IUser } from "@entities/User/models"
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/shadcn/ui/avatar"
import {
   Item,
   ItemActions,
   ItemContent,
   ItemDescription,
   ItemMedia,
   ItemTitle,
} from "@shared/ui/shadcn/ui/item"

interface Props {
   data?: IUser
   children?: React.ReactNode
}

export const UserChip: React.FC<Props> = ({ data, children }) => {
   return (
      <Item variant="muted">
         <ItemMedia variant="image">
            <Avatar size="lg">
               <AvatarFallback>U</AvatarFallback>
               <AvatarImage src={data?.image} />
            </Avatar>
         </ItemMedia>

         <ItemContent>
            <ItemTitle>{data?.name}</ItemTitle>
            <ItemDescription>{data?.email}</ItemDescription>
         </ItemContent>

         {children && <ItemActions>{children}</ItemActions>}
      </Item>
   )
}
