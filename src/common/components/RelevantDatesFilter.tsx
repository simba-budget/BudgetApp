import { useCommonTranslations } from '@i18n/hooks';
import isEqual from 'lodash/isEqual';
import React, { FC, useCallback, useMemo } from 'react';

import { dateRangesMap, getRelevantDatesFilters } from '../constants';
import { DateRange, RelevantDate } from '../types';

import HorizontalFilter, {
  HorizontalFilterOption,
  HorizontalFilterProps,
} from './HorizontalFilter';

export interface RelevantDatesFilterProps
  extends Omit<
    HorizontalFilterProps<RelevantDate>,
    'options' | 'isAllOptionHidden' | 'value' | 'onChange'
  > {
  value?: DateRange | null;
  onChange?: (range: DateRange | null) => void;
}

const RelevantDatesFilter: FC<RelevantDatesFilterProps> = (props) => {
  const { onChange, value, ...rest } = props;
  const { t } = useCommonTranslations();

  const relevantDate = useMemo<RelevantDate | null>(() => {
    if (!value) return null;
    const keys = Object.keys(dateRangesMap) as RelevantDate[];
    const range = keys.find((key) => isEqual(dateRangesMap[key](), value));
    return range ?? null;
  }, [value]);

  const options = useMemo<HorizontalFilterOption<RelevantDate>[]>(
    () => getRelevantDatesFilters(t),
    [t],
  );

  const handleOnChange = useCallback(
    (newValue: RelevantDate | null) => {
      onChange?.(newValue ? dateRangesMap[newValue]() : null);
    },
    [onChange],
  );

  return (
    <HorizontalFilter
      {...rest}
      value={relevantDate}
      onChange={handleOnChange}
      isAllOptionHidden
      options={options}
    />
  );
};

export default RelevantDatesFilter;
