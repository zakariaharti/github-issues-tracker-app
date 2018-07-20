import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

export const configureEnzyme = () => Enzyme.configure({ adapter: new Adapter() });
