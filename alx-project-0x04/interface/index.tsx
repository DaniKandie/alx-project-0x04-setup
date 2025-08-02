export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: "red" | "blue" | "orange" | "green";
  buttonSize: string;
  action: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}