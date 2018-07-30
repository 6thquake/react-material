// export * from './AutoComplete';
// export { default } from './AutoComplete';
import AutoComplete from './AutoComplete';
import SyncAutoComplete from './SyncAutoComplete';
AutoComplete.Sync = SyncAutoComplete;

export default AutoComplete;
