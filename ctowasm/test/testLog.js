/**
 * This file exports a JS object containing information on all tests.
 *
 * JS object schema + explanation:
 * testLog : {
 *    "testcase name": {
 *      title: string // descriptive title of the testcase,
 *      expectedCode: boolean // true if there is a precompiled WAT file within the /test/subset{subset of the testcase} folder to compare compiled code to
 *      expectedValues: (string | number)[] // array of strings or numbers representing the expected output to stdout of the compiled testcase when run, to be compared to actual output
 *      customTest: ((string | number)[]) => boolean // custom test to run on the actual output to stdout instead of comparing to expectedValues
 *    }
 * }
 */
const testLog = {
  subset1: {
    fn_call_1: {
      title: "Function call 1",
      expectedCode: false, // whether there exists a verified expect WAT for the given test
      expectedValues: [1],
    },
    fn_def_1: {
      title: "Function definition 1",
      expectedCode: false,
    },
    fn_return_1: {
      title: "Function return 1",
      expectedCode: false,
      expectedValues: [1],
    },
    var_assign_1: {
      title: "Variable assignment 1",
      expectedCode: false,
      expectedValues: [2, 5],
    },
    var_dec_1: {
      title: "Variable declaration 1",
      expectedCode: false,
    },
    var_init_1: {
      title: "Variable initialization 1",
      expectedCode: false,
      expectedValues: [10],
    },
    var_global_1: {
      title: "Global variable declaration, initialization & assignment 1",
      expectedCode: false,
      expectedValues: [20, 30, 20, 30],
    },
  },
  subset2: {
    add_1: {
      title: "Addition expression 1",
      expectedCode: false,
      expectedValues: [10],
    },
    arithmetic_1: {
      title: "Complex arithmetic expression 1",
      expectedCode: false,
      expectedValues: [33, 10],
    },
    brackets_1: {
      title: "Bracketed arithmetic expression 1",
      expectedCode: false,
      expectedValues: [20, 4],
    },
    divide_1: {
      title: "Divide expression 1",
      expectedCode: false,
      expectedValues: [3],
    },
    multiply_1: {
      title: "Multiply expression 1",
      expectedCode: false,
      expectedValues: [20],
    },
    postfix_add_1: {
      title: "Postfix addition expression 1 - postfix as statement",
      expectedCode: false,
      expectedValues: [2, 3],
    },
    postfix_subtract_1: {
      title: "Postfix subtraction expression 1 - postfix as statement",
      expectedCode: false,
      expectedValues: [2, 1],
    },
    prefix_add_1: {
      title: "Prefix addition expression 1 - prefix as statement",
      expectedCode: false,
      expectedValues: [2, 3],
    },
    prefix_subtract_1: {
      title: "Prefix subtraction expression 1 - prefix as statement",
      expectedCode: false,
      expectedValues: [4, 3],
    },
    remainder_1: {
      title: "Remainder expression 1",
      expectedCode: false,
      expectedValues: [2],
    },
    subtract_1: {
      title: "Subtract expression 1",
      expectedCode: false,
      expectedValues: [4],
    },
    prefix_subtract_2: {
      title: "Prefix subtraction expression 2 - prefix as expression",
      expectedCode: false,
      expectedValues: [10, 9],
    },
    prefix_add_2: {
      title: "Prefix addition expression 2 - prefix as expression",
      expectedCode: false,
      expectedValues: [10, 11],
    },
    postfix_add_2: {
      title: "Postfix addition expression 2 - postfix as expression",
      expectedCode: false,
      expectedValues: [10, 11],
    },
    postfix_subtract_2: {
      title: "Postfix subtraction expression 2 - postfix as expression",
      expectedCode: false,
      expectedValues: [10, 9],
    },
    and_1: {
      title: "And expression 1",
      expectedCode: false,
      expectedValues: [1, 1],
    },
    or_1: {
      title: "Or expression 1",
      expectedCode: false,
      expectedValues: [0, 1],
    },
    conditional_1: {
      title: "Conditional expression 1",
      expectedCode: false,
      expectedValues: [12, 1],
    },
    compound_add_1: {
      title: "Compound add expression 1",
      expectedCode: false,
      expectedValues: [2, 3],
    },
    compound_subtract_1: {
      title: "Compound subtract expression 1",
      expectedCode: false,
      expectedValues: [10, 8],
    },
    compound_multiply_1: {
      title: "Compound multiply expression 1",
      expectedCode: false,
      expectedValues: [10, 20],
    },
    compound_divide_1: {
      title: "Compound divide expression 1",
      expectedCode: false,
      expectedValues: [10, 5],
    },
    compound_remainder_1: {
      title: "Compound remainder expression 1",
      expectedCode: false,
      expectedValues: [10, 0],
    },
  },
  subset3: {
    eq_comparison_statement_1: {
      title: "Equals comparison expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 1],
    },
    ne_comparison_statement_1: {
      title: "Not equals expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 0],
    },
    lt_comparison_statement_1: {
      title: "Less than expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 0],
    },
    le_comparison_statement_1: {
      title: "Less than or equals expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 1],
    },
    gt_comparison_statement_1: {
      title: "Greater than expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 0],
    },
    ge_comparison_statement_1: {
      title: "Greater than or equals expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 1],
    },
    comparison_1: {
      title: "Complex comparison expression 1",
      expectedCode: false,
      expectedValues: [2, 2, 0],
    },
    select_statement_1: {
      title: "Select statement (if else-if else blocks) 1",
      expectedCode: false,
      expectedValues: [100, 2],
    },
    assign_expr_1: {
      title: "Assignment expression 1",
      expectedCode: false,
      expectedValues: [19, 19, 19],
    },
    compound_assign_expr_1: {
      title: "Compound assignment expression 1",
      expectedCode: false,
      expectedValues: [2, 0, 2],
    },
    do_while_loop_1: {
      title: "Do while loop 1",
      expectedCode: false,
      expectedValues: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10],
    },
    while_loop_1: {
      title: "While loop 1",
      expectedCode: false,
      expectedValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    for_loop_1: {
      title: "For loop 1",
      expectedCode: false,
      expectedValues: [11],
    },
    single_line_comments_1: {
      title: "Single-line comments 1",
      expectedCode: false,
      expectedValues: [2, 4],
    },
    multi_line_comments_1: {
      title: "Multi-line comments 1",
      expectedCode: false,
      expectedValues: [1],
    },
    overall_1: {
      title: "Overall feature test 1 - Pow function",
      expectedCode: false,
      expectedValues: [1024],
    },
    array_declaration_1: {
      title: "Array declaration 1",
      expectedCode: false,
    },
    array_initialization_1: {
      title:
        "Array initialization 1 - Initialize with inferred size from initializer list",
      expectedCode: false,
      expectedValues: [1, 2, 3],
    },
    array_initialization_2: {
      title: "Array intialization 2 - Initialize with defined size",
      expectedCode: false,
      expectedValues: [1, 2, 3, 4, 5],
    },
    array_element_assignment_1: {
      title: "Array element assignment 1 - Assign value to element in array",
      expectedCode: false,
      expectedValues: [10, 2],
    },
    array_global_1: {
      title: "Array global declaration & assignment 1",
      expectedCode: false,
      expectedValues: [1, 10, 3, 4, 5, 10, 20],
    },
    merge_sort: {
      title: "Overall test of array features using mergesort algorithm",
      expectedCode: false,
      expectedValues: [-2, 2, 4, 4, 5, 6, 7, 10, 23, 199],
    },
    array_indexing_1: {
      title: "Test more complicated array indexing 1",
      expectedCode: false,
      expectedValues: [1, 1, 2, 0],
    },
    recursion_test_1: {
      title: "Recursion test 1",
      expectedCode: false,
      expectedValues: [0, 3, 0, 2, 0, 1, 2],
    },
    if_statement_1: {
      title: "If statement test 1",
      expectedCode: false,
      expectedValues: [10],
    },
  },
  subset4: {
    char_1: {
      title: "Char type - global and local initialization 1",
      expectedCode: false,
      expectedValues: [10, "a", 20, "b"],
    },
    signed_long_1: {
      title: "Signed long type - global and local initialization 1",
      expectedCode: false,
      expectedValues: [-2147483646, 2147483648, 4294967296],
    },
    unsigned_ints_1: {
      title: "Test unsigned int types 1",
      expectedCode: false,
      expectedValues: [
        "a",
        10,
        20,
        4294967286,
        -10,
        100,
        4294967296,
        18446744073709551606n,
        -10,
        90,
      ],
    },
    float_1: {
      title: "Test float and double initialization and arithmetic 1",
      expectedCode: false,
      expectedValues: [
        "-1.100000",
        "11000000512.000000",
        "100000002004087734272.000000",
        "120.900000",
        "-45000000000000003180425857343460263067648.000000",
        "-inf",
        "-45000000000000003180425857343460263067648.000000",
      ],
    },
    float_overflows_1: {
      title: "Test float overflow 1",
      expectedCode: false,
      expectedValues: ["inf", "inf"],
    },
    implicit_conversions_1: {
      title:
        "Test implict conversions - both standard and undefined behaviour 1",
      expectedCode: false,
      expectedValues: [
        "10",
        "4294967286",
        "10",
        "10",
        "10",
        "10",
        "10",
        "10",
        "123.120003",
        "57",
        "12345",
        "12345",
        "-2147483648",
        "2147483648.000000",
        "1.000000",
        "12468",
        "12346.400391",
      ],
    },
    double_1: {
      title: "Double type tests 1",
      expectedCode: false,
      expectedValues: [
        "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104.000000",
        "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104.000000",
        "4500000000000000145892582743499520794915180300603347678057176554040382855249592033071871617551187470880974849994584216093935534080.000000",
        "4500000000000000145892582743499520794915180300603347678057176554040382855249592033071871617551187470880974849994584216093935534080.000000",
        "45000000000000003921551214709650158716591809265009339598055469944494245299264258096076326894087537922201389430253069711353604734976.000000",
        "450000000000000014589258274349952079491518030060334767805717655404038285524959203307187161755118747088097484999458421609393553408.000000",
        "4500000000000000145892582743499520794915180300603347678057176554040382855249592033071871617551187470880974849994584216093935534080.000000",
      ],
    },
    bitwise_shift_1: {
      title: "Bitwise shift tests 1",
      expectedCode: false,
      expectedValues: [240, -1, 156, 8589934588],
    },
    bitwise_and_1: {
      title: "Bitwise and 1",
      expectedCode: false,
      expectedValues: [0, 8],
    },
    bitwise_or_1: {
      title: "Bitwise or 1",
      expectedCode: false,
      expectedValues: [30, 11],
    },
    bitwise_xor_1: {
      title: "Bitwise xor 1",
      expectedCode: false,
      expectedValues: [171817911, -1221345193, -6647, 1123130857],
    },
    bitwise_complement_1: {
      title: "Bitwise complement 1",
      expectedCode: false,
      expectedValues: [
        "-124",
        "-215346",
        "12311",
        "4294967063",
        "18446744073709116381",
      ],
    },
    complex_declarations: {
      title: "Test parsing of more complex declarations",
      expectedCode: false,
      expectedValues: [3, 1],
    },
    pointers_address_of: {
      title: "Pointers tests - address of '&' operator",
      expectedCode: false,
      expectedValues: [10, 20],
    },
    pointers_arithmetic_1: {
      title: "Pointers tests - arithmetic 1",
      expectedCode: false,
      expectedValues: [3, 6, 2, 5, 1, 2, 3, 4, 5, 6, 3, 2, 1, 6, 5, 4],
    },
    pointers_arithmetic_2: {
      title: "Pointers tests - arithmetic 2",
      expectedCode: false,
      expectedValues: ["b", 4, 2],
    },
    pointers_arithmetic_3: {
      title: "Pointers tests - arithmetic 3",
      expectedCode: false,
      expectedValues: [2, -2],
    },
    pointers_array_deref_test: {
      title: "Pointers tests - dereferencing pointer to array",
      expectedCode: false,
      customTest: (values) => {
        return (
          values[0] === "2" &&
          values[1] === values[2] &&
          values[1] === values[3]
        );
      },
    },
    pointers_comparison: {
      title: "Pointers tests - comparison operations",
      expectedCode: false,
      expectedValues: [1, 1, 1, 0, 0, 0],
    },
    multi_dim_array_1: {
      title: "Multi dimensional arrays 1",
      expectedCode: false,
      expectedValues: [1, 6, 8, 3],
    },
    arrays_function_parameters: {
      title:
        "Arrays as function parameters - should be implicitly treated as pointers",
      expectedCode: false,
      expectedValues: [2],
    },
    merge_sort_2: {
      title:
        "Mergesort 2 - using long type local arrays passed as function parameters",
      expectedCode: false,
      expectedValues: [-12, 12, 32, 123, 4294967296],
    },
    for_loop_2: {
      title:
        "For loop 2 - Variant of for loop with no declaration and empty expressions",
      expectedCode: false,
      expectedValues: [10, 5],
    },
    break_statement: {
      title: "Break statement",
      expectedCode: false,
      expectedValues: [0],
    },
    continue_statement: {
      title: "Continue statement",
      expectedCode: false,
      expectedValues: [0, 20],
    },
    sizeof_expression_1: {
      title: "Sizeof expression 1 - test sizeof operator on expressions",
      expectedCode: false,
      expectedValues: [1, 2, 4, 8, 40, 4, 4, 4, 40, 4],
    },
  },
  subset5: {
    sizeof_expression_2: {
      title: "Sizeof expression 2 - test sizeof operator on datatypes",
      expectedCode: false,
      expectedValues: [1, 2, 4, 8, 4, 160],
    },
    structs_1: {
      title:
        "Struct tests 1 - declarations and simple member access via . and ->",
      expectedCode: false,
      expectedValues: [1, 1],
    },
    complex_initializers: {
      title:
        "Test complex initializer list expressions - proof of working recursive rules as per 6.7.9 constraint 20 of C17 standard",
      expectedCode: false,
      expectedValues: [1, 2, 6, 1, 2, 3, 0, 1, 2, 6, 1, 2, 3, 0],
    },
    incomplete_pointers: {
      title:
        "Test the ability to declare pointers to incomplete types, as long as the type is subsequently defined later in the program.",
      expectedCode: false,
      expectedValues: [2, 0],
    },
    structs_arrays: {
      title:
        "Test working with arrays of structs, and structs with fields that are arrays.",
      expectedCode: false,
      expectedValues: [1, 2, 4, 1, 6],
    },
    structs_2: {
      title:
        "Structs 2 - Test initializing and assignning more complicated structs",
      expectedCode: false,
      expectedValues: [200, 220, 2, 40, 200, 2],
    },
    structs_functions: {
      title:
        "Structs - Functions - Test using structs as parameters and returning structs (accessing the struct fields directly from return expressions as well)",
      expectedCode: false,
      expectedValues: [
        50, 1, 2, 4, 10, 20, 30, 40, 50, 5, 6, 7, 8, 9, 10, 11, 12, 6,
      ],
    },
    octal_constants: {
      title: "Test parsing of octal constants",
      expectedCode: false,
      expectedValues: [10, 32256, 83, 511],
    },
    hexadecimal_constants: {
      title: "Test parsing of hexidecimal constants",
      expectedCode: false,
      expectedValues: [18, 487424, 291, 1911],
    },
    string_literal: {
      title: "Test string literal usage as initializer",
      expectedCode: false,
      expectedValues: ["hello world", "Hello World"],
    },
    string_literal_expression: {
      title: "Test string literal usage as expression",
      expectedCode: false,
      expectedValues: ["hello world", "bye"],
    },
    comma_separated_expressions: {
      title: "Test comma separated expressions",
      expectedCode: false,
      expectedValues: [10, 1, 7, 4],
    },
    declarations_test: {
      title:
        "Test various declarations all in one file - structs, enums, typedef",
      expectedCode: false,
    },
    typedef_ambiguity: {
      title:
        "Test that the compiler correctly deals with the C typedef ambiguity problem",
      expectedCode: false,
      expectedValues: [200],
    },
    enums_1: {
      title: "Test enum declaration and enumerator usage",
      expectedCode: false,
      expectedValues: [20, 200, 0, 10, 389],
    },
    static_storage_class: {
      title: "Test 'static' storage class specifier",
      expectedCode: false,
      expectedValues: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6,
        12, 7, 14, 8, 16, 9, 18,
      ],
    },
    conditional_expression: {
      title: "Test conditional expressions",
      expectedCode: false,
      expectedValues: [2, 100, 1, 2, -1, -1],
    },
    switch_statements: {
      title: "Test switch statements",
      expectedCode: false,
      expectedValues: [1, 1, 1, 1, 1, 1],
    },
    nested_loop_jumps: {
      title: "Test jump statements (continue/break) in nested while loops",
      expectedCode: false,
      expectedValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    function_pointers_1: {
      title:
        "Function Pointers 1: Test basic functionality - declaration, initialization and calling",
      expectedCode: false,
      expectedValues: [0, 0, 5, 0, 5],
    },
    malloc_1: {
      title: "Malloc 1 - Simple test of malloc and free functions",
      expectedCode: false,
      expectedValues: [10],
    },
    malloc_2: {
      title: "Malloc 2 - Test malloc and free of aggregate types",
      expectedCode: false,
      expectedValues: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        "a",
        3147483622,
        "Hello World!",
      ],
    },
    merge_sort_3: {
      title:
        "Mergesort 3 - Incoporating malloc to dynamically allocate temporary arrays",
      expectedCode: false,
      expectedValues: [
        -23123,
        -12,
        12,
        32,
        123,
        1231,
        2312,
        34342,
        56745,
        "4294967296",
      ],
    },
  },
  error: {
    enum_redeclaration: {
      title: "Redeclaration of enum type",
      expectedErrorMessages: ["Error: Redefinition of 'enum x'"],
    },
    variable_redeclaration: {
      title: "Redeclaration of identifier",
      expectedErrorMessages: ["Error: Redeclaration of symbol 'x'"],
    },
    redefined_tags: {
      title: "Redefinition of tags",
      expectedErrorMessages: ["Error: Redefinition of 'X' as wrong kind of tag", "Error: Redefinition of 'A' as wrong kind of tag", "Error: Redefinition of 'struct X'", "Error: Redefinition of 'Y' as wrong kind of tag"]
    },
    typedef_diff_types: {
      title: "Redefintion of typedefs",
      expectedErrorMessages: ["Error: Redeclaration of symbol 't'", "Error: Redeclaration of symbol 'b' with conflicting type"]
    },
    fn_param_redefinition: {
      title: "Redefintion of function parameter",
      expectedErrorMessages: ["Error: Redefinition of parameter 'x'"]
    },
    undeclared_fn: {
      title: "Call of undeclared function",
      expectedErrorMessages: ["Error: 'f' undeclared"]
    },
    fn_call_with_wrong_args_1: {
      title: "Function call with too many args",
      expectedErrorMessages: ["Error: Number of arguments provided to function call does not match number of parameters specfied in prototype"]
    },
    fn_call_with_wrong_args_2: {
      title: "Function call with too few args",
      expectedErrorMessages: ["Error: Number of arguments provided to function call does not match number of parameters specfied in prototype"]
    },
    fn_call_with_wrong_args_3: {
      title: "Function call with wrong argument type",
      expectedErrorMessages: ["Error: Number of arguments provided to function call does not match number of parameters specfied in prototype"]
    },  
    absent_main: {
      title: "Undefined main function",
      expectedErrorMessages: ["Error: main function not defined"] 
    }
  },
};

export default testLog;
