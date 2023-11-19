import { FilterContainer, FilterInput, FilterSelect } from "./styled";

type FilterProps = {
  filter: string;
  setFilter: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

export default function Filter({
  filter,
  setFilter,
  sort,
  setSort,
}: FilterProps) {
  return (
    <FilterContainer>
      <FilterInput
        type="text"
        placeholder="Filter by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <FilterSelect value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="vote_average">Sort by Rating</option>
        <option value="popularity">Sort by Popularity</option>
      </FilterSelect>
    </FilterContainer>
  );
}
