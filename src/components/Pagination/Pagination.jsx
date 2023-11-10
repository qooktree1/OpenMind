import { createPagination } from '../../utils/utils';
import * as S from './styles';

const Pagination = ({ count, changeOffset, currentNum, limit, width }) => {
  const numbers = createPagination({ count, limit, currentNum, width });

  const checkIsNumberAndChangeOffset = (num) => {
    if (num === '...') return;
    changeOffset(num);
  };

  return (
    <S.PaginationBox>
      {numbers.map((num, index) => (
        <S.PaginationNumberBox
          key={index}
          onClick={() => checkIsNumberAndChangeOffset(num)}
          $currentnum={currentNum === num}
        >
          <p>{num}</p>
        </S.PaginationNumberBox>
      ))}
    </S.PaginationBox>
  );
};

export default Pagination;
