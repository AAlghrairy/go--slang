(module
	(func $pow
		(param $param_x i32)
		(param $param_exp i32)
		(result i32)
		(local $result_0 i32)
		(local $i_1 i32)
		(local.set $result_0 (local.get $param_x))
		(if (i32.eq (local.get $param_exp) (i32.const 0)) (then (return (i32.const 1))))
		(local.set $i_1 (i32.const 1))
		(block $block_0 (loop $loop_0 (br_if $block_0 (i32.eqz (i32.lt_s (local.get $i_1) (local.get $param_exp)))) (local.set $result_0 (i32.mul (local.get $result_0) (local.get $param_x))) (local.set $i_1 (i32.add (local.get $i_1) (i32.const 1))) (br $loop_0)))
		(return (local.get $result_0))
	)
	(func $main
		(local $x_0 i32)
		(local.set $x_0 (i32.const 2))
		(local.set $x_0 (call $pow (i32.const 2) (i32.const 10)))
	)
	(start $main)
)
