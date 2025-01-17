---
title: "Testing Database"
hide_table_of_contents: true
sidebar_position: 8
---

# <kbd>module</kbd> `testing.database`





---


## <kbd>function</kbd> `format_block_numbers`

```python
format_block_numbers(block_num: int, evm_block_num: int) → str
```






---


## <kbd>function</kbd> `get_suffix`

```python
get_suffix(block_num, docs_per_index)
```






---


## <kbd>function</kbd> `index_to_suffix_num`

```python
index_to_suffix_num(index: str) → int
```






---


## <kbd>class</kbd> `StorageEosioDelta`





### <kbd>method</kbd> `__init__`

```python
__init__(obj: dict)
```








---


### <kbd>method</kbd> `block_nums_to_string`

```python
block_nums_to_string()
```






---


## <kbd>class</kbd> `InternalEvmTransaction`





### <kbd>method</kbd> `__init__`

```python
__init__(obj: dict)
```









---


## <kbd>class</kbd> `StorageEvmTransaction`





### <kbd>method</kbd> `__init__`

```python
__init__(obj: dict)
```









---


## <kbd>class</kbd> `StorageEosioAction`





### <kbd>method</kbd> `__init__`

```python
__init__(obj: dict)
```









---


## <kbd>class</kbd> `ElasticDataIntegrityError`








---


## <kbd>class</kbd> `ESDuplicatesFound`





### <kbd>method</kbd> `__init__`

```python
__init__(message: str, delta_dups: list[int], action_dups: list[int])
```









---


## <kbd>class</kbd> `ESGapFound`





### <kbd>method</kbd> `__init__`

```python
__init__(message: str, start: int)
```









---


## <kbd>class</kbd> `ElasticDriver`





### <kbd>method</kbd> `__init__`

```python
__init__(config: dict)
```








---


### <kbd>method</kbd> `block_from_evm_num`

```python
block_from_evm_num(num: int)
```





---


### <kbd>method</kbd> `check_gaps`

```python
check_gaps(lower_bound: int, upper_bound: int, interval: int) → Optional[int]
```





---


### <kbd>method</kbd> `find_duplicate_actions`

```python
find_duplicate_actions(lower: int, upper: int)
```





---


### <kbd>method</kbd> `find_duplicate_deltas`

```python
find_duplicate_deltas(lower: int, upper: int)
```





---


### <kbd>method</kbd> `find_gap_in_indices`

```python
find_gap_in_indices()
```





---


### <kbd>method</kbd> `full_integrity_check`

```python
full_integrity_check()
```





---


### <kbd>method</kbd> `get_first_indexed_block`

```python
get_first_indexed_block()
```





---


### <kbd>method</kbd> `get_last_indexed_block`

```python
get_last_indexed_block()
```





---


### <kbd>method</kbd> `get_ordered_delta_indices`

```python
get_ordered_delta_indices()
```





---


### <kbd>method</kbd> `purge_newer_than`

```python
purge_newer_than(block_num, evm_block_num)
```





---


### <kbd>method</kbd> `repair_data`

```python
repair_data()
```





---


### <kbd>method</kbd> `run_histogram_gap_check`

```python
run_histogram_gap_check(lower: int, upper: int, interval: int)
```





---


### <kbd>method</kbd> `tx_from_hash`

```python
tx_from_hash(h: str)
```








---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
