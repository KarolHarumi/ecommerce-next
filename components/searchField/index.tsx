import Styles from './style';
import { SearchFieldProps } from './types';

export default function SearchField({ onChange }: SearchFieldProps) {
  return (
    <Styles.Search 
      type="text" 
      id="search" 
      name="search" 
      placeholder="Search" 
      onChange={onChange} 
    />
  ) 
}
