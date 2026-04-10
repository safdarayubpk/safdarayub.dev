import { getSearchItems } from "@/lib/search-data";
import { Search } from "./search";

export function SearchWrapper() {
  const items = getSearchItems();
  return <Search items={items} />;
}
