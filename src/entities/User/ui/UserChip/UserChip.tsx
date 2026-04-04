import { IUser } from "@entities/User/models"
import {
   Avatar,
   AvatarBadge,
   AvatarFallback,
   AvatarImage,
} from "@shared/ui/shadcn/ui/avatar"
import {
   Item,
   ItemActions,
   ItemContent,
   ItemDescription,
   ItemFooter,
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
               <AvatarImage
                  src={data?.picture}
                  alt={data?.nickname}
               />
               <AvatarFallback>
                  {data?.nickname?.[0]?.toUpperCase() || "U"}
               </AvatarFallback>
               <AvatarBadge className="bg-green-600" />
            </Avatar>
         </ItemMedia>

         <ItemContent>
            <ItemTitle>{data?.nickname}</ItemTitle>
            <ItemDescription>{data?.email}</ItemDescription>
         </ItemContent>

         <ItemFooter>
            {children && <ItemActions className="ml-auto">{children}</ItemActions>}
         </ItemFooter>
      </Item>
   )
}
