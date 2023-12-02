import { ReduxProvider } from "@/redux/provider";
import GlobalNavigation from "./global-navigation";
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <ReduxProvider>
              <GlobalNavigation/>
              {children}
          </ReduxProvider>
    )
  }
  