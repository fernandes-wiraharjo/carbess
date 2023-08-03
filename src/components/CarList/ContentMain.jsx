import Wrapper from './wrapper/wrapper';
import { LeftColumn, RightColumn } from './columns/column.jsx';
import Filter from './filter/filter';

export default function ContentMain() {
    return (
        <div>
            <Wrapper>
                <LeftColumn>
                    <Filter />
                </LeftColumn>
                <RightColumn>
                    Isi Halaman
                </RightColumn>
            </Wrapper>
        </div>
    );
}
