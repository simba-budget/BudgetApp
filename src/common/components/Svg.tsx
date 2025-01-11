import Apple from '@assets/svg/apple.svg';
import Check from '@assets/svg/check.svg';
import Email from '@assets/svg/email.svg';
import EyeOff from '@assets/svg/eye-off.svg';
import Eye from '@assets/svg/eye.svg';
import Facebook from '@assets/svg/facebook.svg';
import FlagEn from '@assets/svg/flags/en.svg';
import FlagLt from '@assets/svg/flags/lt.svg';
import FlagRu from '@assets/svg/flags/ru.svg';
import Google from '@assets/svg/google.svg';
import HeartFilled from '@assets/svg/heart-filled.svg';
import Heart from '@assets/svg/heart.svg';
import Notifications from '@assets/svg/notifications.svg';
import ShoppingBag from '@assets/svg/shopping-bag.svg';
import StarFilled from '@assets/svg/star-filled.svg';
import User from '@assets/svg/user.svg';
import ArrowDown from '@assets/svg/v2/arrow-down.svg';
import ArrowLeft from '@assets/svg/v2/arrow-left.svg';
import ArrowRightLeft from '@assets/svg/v2/arrow-right-left.svg';
import ArrowRight from '@assets/svg/v2/arrow-right.svg';
import Calendar from '@assets/svg/v2/calendar.svg';
import Call from '@assets/svg/v2/call.svg';
import Card from '@assets/svg/v2/card.svg';
import Chart from '@assets/svg/v2/chart.svg';
import Chat from '@assets/svg/v2/chat.svg';
import ChevronDown from '@assets/svg/v2/chevron-down.svg';
import ChevronLeft from '@assets/svg/v2/chevron-left.svg';
import Clear from '@assets/svg/v2/clear.svg';
import Delete from '@assets/svg/v2/delete.svg';
import DocumentAdd from '@assets/svg/v2/document-add.svg';
import Document from '@assets/svg/v2/document.svg';
import Edit from '@assets/svg/v2/edit.svg';
import Filter from '@assets/svg/v2/filter.svg';
import Hide from '@assets/svg/v2/hide.svg';
import Home from '@assets/svg/v2/home.svg';
import Location from '@assets/svg/v2/location.svg';
import Lock from '@assets/svg/v2/lock.svg';
import Logout from '@assets/svg/v2/logout.svg';
import More from '@assets/svg/v2/more.svg';
import Notification from '@assets/svg/v2/notification.svg';
import Pin from '@assets/svg/v2/pin.svg';
import Plus from '@assets/svg/v2/plus.svg';
import Profile from '@assets/svg/v2/profile.svg';
import Search from '@assets/svg/v2/search.svg';
import Settings from '@assets/svg/v2/settings.svg';
import Show from '@assets/svg/v2/show.svg';
import SquaresPlus from '@assets/svg/v2/squares-plus.svg';
import Star from '@assets/svg/v2/star.svg';
import UserPlus from '@assets/svg/v2/user-plus.svg';
import Users from '@assets/svg/v2/users.svg';
import Wallet from '@assets/svg/v2/wallet.svg';
import Warning from '@assets/svg/v2/warning.svg';
import Work from '@assets/svg/v2/work.svg';
import { IconName } from '@icons';
import React, { FC, useMemo } from 'react';
import { SvgProps } from 'react-native-svg';

const icons: Record<IconName, FC<SvgProps>> = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  eye: Eye,
  eyeOff: EyeOff,
  facebook: Facebook,
  google: Google,
  apple: Apple,
  check: Check,
  heart: Heart,
  home: Home,
  notifications: Notifications,
  shoppingBag: ShoppingBag,
  user: User,
  heartFilled: HeartFilled,
  starFilled: StarFilled,
  email: Email,
  lock: Lock,
  chart: Chart,
  profile: Profile,
  hide: Hide,
  show: Show,
  card: Card,
  users: Users,
  document: Document,
  filter: Filter,
  search: Search,
  plus: Plus,
  notification: Notification,
  delete: Delete,
  edit: Edit,
  logout: Logout,
  settings: Settings,
  work: Work,
  chat: Chat,
  location: Location,
  call: Call,
  calendar: Calendar,
  flagEn: FlagEn,
  flagLt: FlagLt,
  flagRu: FlagRu,
  arrowDown: ArrowDown,
  warning: Warning,
  more: More,
  clear: Clear,
  userPlus: UserPlus,
  documentAdd: DocumentAdd,
  star: Star,
  pin: Pin,
  chevronDown: ChevronDown,
  wallet: Wallet,
  arrowRightLeft: ArrowRightLeft,
  squaresPlus: SquaresPlus,
  chevronLeft: ChevronLeft,
};

export interface SvgIconProps
  extends Omit<SvgProps, 'disabled' | 'width' | 'height' | 'color'> {
  name: IconName;
  color?: string;
  size?: number;
}

const Svg = ({ name, size = 24, color, ...rest }: SvgIconProps) => {
  const Icon = useMemo<FC<SvgProps>>(() => icons[name], [name]);

  return (
    <Icon
      key={`${color}-${size}`}
      disabled
      width={size}
      height={size}
      color={color}
      {...rest}
    />
  );
};

export default Svg;
