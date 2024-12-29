import { useNavigation } from "@remix-run/react";

/**
 * Returns a condition to render loading indicators like `animate-pulse` on any
 * comic page, and to disable further form submissions while queries are
 * processing.
 */
export default function useIsSearching(): boolean {
  const navigation = useNavigation();
  return !!navigation.location?.search;
}
