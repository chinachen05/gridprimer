const ref={
 formulas:['Microsoft: Overview of formulas in Excel','https://support.microsoft.com/en-us/excel/get-started/overview-of-formulas-in-excel'],
 functions:['Google: Sheets function list','https://support.google.com/docs/table/25273?hl=en'],
 refs:['Microsoft: Relative and absolute references','https://support.microsoft.com/en-us/excel/switch-between-relative-and-absolute-references'],
 count:['Microsoft: Ways to count cells','https://support.microsoft.com/en-us/excel/ways-to-count-cells-in-a-range-of-data-in-excel'],
 countif:['Google: COUNTIF','https://support.google.com/docs/answer/3093480?hl=en'],
 sumif:['Google: SUMIF','https://support.google.com/docs/answer/3093583?hl=en'],
 ifs:['Microsoft: IF function','https://support.microsoft.com/en-us/excel/functions/if-function'],
 validation:['Microsoft: Create a drop-down list','https://support.microsoft.com/en-us/excel/get-started/create-a-drop-down-list'],
 sheetsValidation:['Google: Create an in-cell dropdown','https://support.google.com/docs/answer/186103?co=GENIE.Platform%3DDesktop&hl=en-GB'],
 sort:['Google: Sort and filter data','https://support.google.com/docs/answer/3540681?hl=en'],
 lookup:['Microsoft: VLOOKUP function','https://support.microsoft.com/en-us/excel/functions/vlookup-function'],
 csv:['Microsoft: Save a workbook to CSV','https://support.microsoft.com/en-us/excel/save-a-workbook-in-another-file-format'],
 formats:['Microsoft: File formats supported in Excel','https://support.microsoft.com/en-US/Excel/file-formats-that-are-supported-in-excel'],
 locale:['Google: Spreadsheet location and calculation settings','https://support.google.com/docs/answer/58515?hl=en'],
 errors:['Microsoft: How to avoid broken formulas','https://support.microsoft.com/en-us/excel/how-to-avoid-broken-formulas-in-excel'],
 today:['Google: TODAY function','https://support.google.com/docs/answer/3092984?hl=en']
};
export const articles=[
{
 slug:'cells-rows-columns-ranges',category:'Start here',title:'Cells, rows, columns, and ranges: read a spreadsheet address',
 description:'Learn how A1 references work and how to read a rectangular range without confusing a cell with its value.',
 takeaway:'A cell address combines a column letter and row number. A range such as B2:B6 includes the cells from B2 through B6.',
 body:`<h2>Start with one cell</h2><p>Columns are identified by letters and rows by numbers. The cell at column B and row 2 is B2. The address is a location: the value inside B2 might be a number, text, a date, or a formula. Changing the value does not change the address.</p>
<h2>Read a range</h2><p><code>B2:B6</code> refers to five cells in one column: B2, B3, B4, B5, and B6. <code>A2:C6</code> is a rectangle covering three columns and five rows. The colon indicates the continuous range between its endpoints; it does not mean “add these values.”</p>
<h2>Use a reference in a formula</h2><p>If B2 contains 8 and B3 contains 12, entering <code>=B2+B3</code> in another cell returns 20. If B3 later changes to 15, the result recalculates to 23 when calculation is enabled. Avoid placing the formula inside one of the cells it depends on, which can create a circular reference.</p>
<h2>Distinguish sheets and workbooks</h2><p>A workbook or spreadsheet file can contain multiple sheets. A formula can refer to another sheet, but the sheet name and punctuation matter. A name with spaces commonly needs single quotes, as in <code>='Monthly Plan'!B2</code>. Check the exact name if a reference does not work.</p>
<h2>Practice</h2><p>Write three numbers in B2:B4 and use <code>=SUM(B2:B4)</code> in B5. Change one input and verify the total. Keep a clear header above the range so another person knows what the numbers represent.</p>`,sources:[ref.formulas,ref.functions]
},
{
 slug:'build-a-clean-data-table',category:'Start here',title:'Build a spreadsheet table that is easy to sort and summarize',
 description:'Organize one record per row, define consistent columns, and separate inputs from summary formulas.',
 takeaway:'Use one header row, one kind of value per column, and one record per row. Keep totals outside the source data where possible.',
 body:`<h2>Decide what one row represents</h2><p>One row might be one order, one task, or one expense. Do not mix a customer summary and individual orders in the same table without a clear distinction. When every row represents the same kind of record, filtering and counting become easier to reason about.</p>
<h2>Use clear columns</h2><p>A simple task table might use Task ID, Task, Owner, Due date, and Status. Give every column a unique heading. Store the due date as a date and the status as a consistent value; avoid putting “Maria / Friday / done” into one cell when those details need to be filtered separately.</p>
<h2>Keep the source range continuous</h2><p>Avoid blank rows inside the data block and merged cells in the body. They can make a sort or filter range harder to select correctly. Keep subtotals, notes, and charts in a separate area or sheet so they are not mistaken for records.</p>
<h2>Plan for new rows</h2><p>Use a stable ID when names may repeat. If formulas refer only to rows 2 through 20, a new record on row 21 is not automatically included unless the reference or table expands. Features differ between spreadsheet versions, so check the range after adding rows.</p>
<h2>Test the design</h2><p>Add three fictional records, filter by status, and confirm that every field stays with its original row. Then change one value and check the summary. A small test reveals problems before the sheet becomes important to a team.</p>`,sources:[ref.sort,ref.formulas]
},
{
 slug:'numbers-stored-as-text',category:'Start here',title:'Why a spreadsheet number may be stored as text',
 description:'Recognize common number-as-text problems, including leading zeros, spaces, and imported data.',
 takeaway:'A value that looks like a number is not always numeric. Preserve identifiers as text; convert quantities only when they are meant for arithmetic.',
 body:`<h2>Identify the purpose of the column</h2><p>Quantities and prices generally need numeric values for arithmetic. An ID such as 00125, a postal code, or a product code may need to remain text because leading zeros are meaningful. A spreadsheet can display a numeric value with leading zeros using formatting, but that is not the same as storing an identifier as text.</p>
<h2>Notice signs of a problem</h2><p>Imported values may include spaces, a currency symbol, a decimal separator your locale does not recognize, or an apostrophe used to force text entry. A SUM that unexpectedly ignores some cells is a reason to inspect the inputs, not evidence that every value should be converted automatically.</p>
<h2>Try a small test</h2><p>In an empty cell, <code>=ISNUMBER(B2)</code> checks whether B2 is a numeric value in common spreadsheet applications. Test a few records and compare the result with what the column is intended to represent. Dates are also stored as numeric date values in many spreadsheet systems, so the result needs context.</p>
<h2>Convert carefully</h2><p>Work on a copy of imported data. Use your application's import or conversion tools and check locale settings before converting decimal or date values. Some applications provide functions such as VALUE, but the text must be understood under the relevant settings. Do not remove leading zeros from identifiers.</p>
<h2>Verify the result</h2><p>Compare several original and converted rows, including the first, last, blank, and unusual values. Then check the total against an independent example. Number format can change appearance without converting text into a number.</p>`,sources:[ref.functions,ref.locale]
},
{
 slug:'spreadsheet-format-vs-value',category:'Start here',title:'Cell formatting versus the stored value: what changes and what does not',
 description:'Understand percentages, decimals, dates, and why a displayed value can differ from the value used in a calculation.',
 takeaway:'Formatting changes how a value is displayed. A calculation generally uses the underlying value unless a formula explicitly changes it.',
 body:`<h2>See the difference with decimals</h2><p>If a cell contains 2.456 and is formatted to show two decimal places, it may display 2.46 while retaining 2.456. A later calculation normally uses the underlying value. The ROUND function is different: it produces a rounded result that can be used by subsequent formulas.</p>
<h2>Understand percentage display</h2><p>A value of 0.25 formatted as a percentage displays as 25%. If you enter the number 25 and then apply percentage formatting, many spreadsheet applications display 2,500%, because the underlying value is 25. Choose an input convention and make it clear to other users.</p>
<h2>Dates need context</h2><p>Dates are often numeric values shown using a date format, but parsing and default date appearance depend on the application and locale. A displayed date may change appearance when the format changes. If an imported date is actually text, applying a date format alone may not convert it into a usable date value.</p>
<h2>Check before sharing</h2><p>Inspect the formula bar or equivalent to see the underlying entry. Verify totals with a small example and label units such as hours, items, or currency. Do not rely only on cell color to explain what a number means.</p>
<h2>Use ROUND intentionally</h2><p><code>=ROUND(A2,2)</code> produces a value rounded to two decimal places. Decide whether to round individual rows or only the final total; the results can differ. Follow the rules appropriate to your task and application.</p>`,sources:[ref.formulas,ref.locale]
},
{
 slug:'csv-versus-xlsx',category:'Start here',title:'CSV versus XLSX: choose the right format for sharing data',
 description:'Compare a plain-text data exchange file with a workbook that can contain formulas, formatting, and multiple sheets.',
 takeaway:'CSV is useful for exchanging tabular text. An XLSX workbook can retain spreadsheet features that CSV cannot represent.',
 body:`<h2>What CSV carries</h2><p>A CSV file stores rows of delimited text values. It is useful when a system requests a simple import or export. It does not preserve multiple sheets, cell colors, charts, or workbook formulas as functioning spreadsheet features in the way an XLSX workbook does.</p>
<h2>What an XLSX workbook can contain</h2><p>An XLSX workbook can contain multiple worksheets, formulas, formatting, and other spreadsheet features. Compatibility still depends on the applications and versions used. When saving a workbook as CSV, check which sheet will be exported and keep the original workbook.</p>
<h2>Watch the import settings</h2><p>Delimiter, text encoding, decimal separator, and date interpretation can affect the result. A quoted field can itself contain a comma or line break, so splitting every line on commas is not a reliable general-purpose CSV parser. Review an import preview and use the receiving system's specifications.</p>
<h2>Protect identifiers and formulas</h2><p>Codes with leading zeros may be changed when opened with automatic type detection. Import them as text when appropriate. Treat files from untrusted sources carefully: some spreadsheet programs may interpret certain leading characters as formulas. Follow the receiving application's guidance rather than assuming a CSV is harmless.</p>
<h2>Check a round trip</h2><p>Save a copy, export the relevant sheet, and open or import the result in the intended destination. Compare row count, IDs, dates, and a few values with the original. Keep the XLSX source so you can revise and export again.</p>`,sources:[ref.csv,ref.formats]
},
{
 slug:'sum-and-average',category:'Essential formulas',title:'SUM and AVERAGE: summarize a small column of numbers',
 description:'Add a range, calculate its arithmetic mean, and understand how blanks and zeros affect the result.',
 takeaway:'SUM adds numeric values. AVERAGE divides the sum of included numeric values by their count; a zero is a value, not a blank.',
 body:`<h2>Set up an example</h2><p>Enter 8, 12, 5, 0, and 15 in cells B2 through B6. In another cell, <code>=SUM(B2:B6)</code> returns 40. <code>=AVERAGE(B2:B6)</code> returns 8 because the total of 40 is divided by five numeric values.</p>
<h2>Check the selected range</h2><p>The range B2:B6 includes both endpoints. If a new value is added in B7, these formulas do not include it unless the range or a suitable table reference is extended. Do not place the total inside its own input range, which can create a circular reference.</p>
<h2>Distinguish zero and missing data</h2><p>A zero can represent a measured quantity of none and contributes to the numeric count in the example. A truly blank cell in a referenced range is generally ignored by these functions. If a value is missing rather than zero, decide how that should be represented before interpreting the average.</p>
<h2>Inspect text and errors</h2><p>Numbers imported as text in a range may be ignored by SUM or AVERAGE, while an error value may propagate. Test suspicious cells with <code>=ISNUMBER(B2)</code> and check the application's behavior for your data. Avoid silently converting IDs that need leading zeros.</p>
<h2>Verify independently</h2><p>Add the five values manually and divide by five. Then change 15 to 20: the expected sum becomes 45 and the average 9. If the sheet shows something else, review the range and the data types before adding more formulas.</p>`,sources:[ref.formulas,ref.functions]
},
{
 slug:'relative-absolute-references',category:'Essential formulas',title:'Relative and absolute references: copy a formula without moving the wrong cell',
 description:'Use a fixed reference for a shared input while allowing row-specific references to change.',
 takeaway:'Relative references adjust when copied. Dollar signs fix the indicated column or row in an absolute or mixed reference.',
 body:`<h2>Start with a relative formula</h2><p>If B2 contains quantity and C2 contains unit price, <code>=B2*C2</code> in D2 calculates the row total. Copying the formula from D2 to D3 normally changes the references to <code>=B3*C3</code>. That is useful because each row has its own inputs.</p>
<h2>Fix a shared value</h2><p>Suppose F1 contains a shared multiplier. In E2, <code>=D2*$F$1</code> uses D2 from the row and the same F1 value. Copying it to E3 changes D2 to D3 but keeps <code>$F$1</code> fixed. Label the shared input clearly and check that its value is in the intended units.</p>
<h2>Understand mixed references</h2><p><code>$F1</code> fixes column F while allowing the row to change; <code>F$1</code> fixes row 1 while allowing the column to change. Mixed references are useful in a two-dimensional table, but test both a downward and a sideways copy before filling a large area.</p>
<h2>Test the result</h2><p>Try D2 = 10, D3 = 20, and F1 = 0.1. The formulas in E2 and E3 should return 1 and 2. Change F1 to 0.2 and confirm the results become 2 and 4.</p>
<h2>Know the scope</h2><p>Absolute references control how references adjust when a formula is copied; structural edits such as inserting or deleting rows can have different effects. Review formulas after changing a sheet's layout.</p>`,sources:[ref.refs,ref.formulas]
},
{
 slug:'if-formula-basics',category:'Essential formulas',title:'IF formula basics: return one result when a condition is true',
 description:'Create a readable IF formula, test a threshold, and avoid treating a missing input as a real value.',
 takeaway:'IF evaluates a condition and returns one result if it is true and another if it is false.',
 body:`<h2>Read the structure</h2><p>A common form is <code>=IF(condition, value_if_true, value_if_false)</code>. Text results go in quotation marks. For example, <code>=IF(C2&gt;=10,"Ready","Order")</code> returns “Ready” for a numeric C2 value of 10 or more, and “Order” for a lower value.</p>
<h2>Handle a missing input</h2><p>If a blank input should produce no status, test it first: <code>=IF(C2="","",IF(C2&gt;=10,"Ready","Order"))</code>. The outer IF checks for an empty-looking value before the threshold is applied. Make sure this behavior matches how your application treats formulas that return an empty string.</p>
<h2>Test the boundary</h2><p>Enter 9, 10, and 11 in separate rows and copy the formula down. Expected results are Order, Ready, and Ready. The equal sign in <code>&gt;=</code> is what includes 10 in the first result.</p>
<h2>Keep the inputs consistent</h2><p>The threshold example assumes numeric values in C. Text that looks like a number may behave differently. Label the column and consider a data-validation rule if people will enter data regularly.</p>
<h2>Keep formulas readable</h2><p>Long chains of nested IF statements can be difficult to audit. For many categories, consider a clearly maintained lookup table or helper column. Inspect the application documentation and test a small set of expected cases before filling the whole sheet.</p>`,sources:[ref.ifs,ref.formulas]
},
{
 slug:'count-versus-counta',category:'Essential formulas',title:'COUNT versus COUNTA: what is your spreadsheet actually counting?',
 description:'Choose between numeric cells and nonempty cells, and see why dates, zeros, and formulas matter.',
 takeaway:'COUNT counts numeric entries in a range; COUNTA counts nonempty entries. Neither automatically means “number of complete records.”',
 body:`<h2>Compare a simple column</h2><p>Imagine B2:B5 contains the number 5, the text Open, a blank cell, and the number 0. <code>=COUNT(B2:B5)</code> returns 2 for the numeric 5 and 0. <code>=COUNTA(B2:B5)</code> returns 3 because the text entry is also nonempty.</p>
<h2>Know what counts as numeric</h2><p>Dates are often stored as numeric values, so a date can be included by COUNT even when it displays like text. A number imported as text may not be included. Use a small test and the application documentation if the data type is uncertain.</p>
<h2>Watch formulas and spaces</h2><p>A cell containing a formula that returns an empty string may be treated as nonempty by COUNTA even though it looks blank. A space is also content. If you need to count completed records, define an explicit criterion rather than assuming every nonempty-looking cell is a complete entry.</p>
<h2>Count a condition</h2><p>For statuses in C2:C100, <code>=COUNTIF(C2:C100,"Done")</code> counts cells matching that criterion. This is different from counting all populated cells and depends on consistent status text.</p>
<h2>Check a sample</h2><p>Compare the formula with a short, manually counted list that contains a zero, text, a blank, and a formula. Include the header only if you intend to count it; ranges that start on row 2 usually exclude the header.</p>`,sources:[ref.count,ref.functions]
},
{
 slug:'rounding-in-spreadsheets',category:'Essential formulas',title:'Rounding in spreadsheets: format a display or round a result?',
 description:'Understand when rounding changes only the visible decimals and when it changes values used in later formulas.',
 takeaway:'Formatting can display fewer decimals without changing the stored value. ROUND returns a rounded numeric result.',
 body:`<h2>Formatting is a display choice</h2><p>A cell containing 2.456 may display 2.46 when formatted to two decimals, but the stored value can still be 2.456. A formula that references it normally uses the underlying value. Check the formula bar or the equivalent in your application.</p>
<h2>ROUND changes the result</h2><p><code>=ROUND(A2,2)</code> returns A2 rounded to two decimal places. If A2 is 2.456, the returned result is 2.46. The original cell is unchanged unless you replace it; other formulas can refer to the rounded result.</p>
<h2>Row-by-row versus final rounding</h2><p>Consider two values of 1.234. Rounding each to two decimals gives 1.23 + 1.23 = 2.46. Adding the unrounded values first gives 2.468, which rounds to 2.47. Decide which method your process requires rather than mixing them accidentally.</p>
<h2>Plan for floating-point behavior</h2><p>Computers represent many decimal values approximately. Small binary rounding differences can appear in calculations. If a decision depends on a precise financial or contractual rounding rule, use the appropriate professional and application guidance instead of assuming display formatting is sufficient.</p>
<h2>Test negative and boundary values</h2><p>Check a small set of representative positive, negative, and halfway values in the spreadsheet you use. Function behavior and regional conventions may matter for specialized rules. Label rounded outputs so others know which value is being used.</p>`,sources:[ref.functions,ref.formulas]
},
{
 slug:'countif-one-condition',category:'Conditional analysis',title:'COUNTIF: count rows that match one condition',
 description:'Count a consistent status or numeric threshold and check the range before trusting the result.',
 takeaway:'COUNTIF checks each cell in a range against one criterion; it counts matching cells, not necessarily complete records.',
 body:`<h2>Count a status</h2><p>If C2:C6 contains Done, Open, Done, Open, Done, then <code>=COUNTIF(C2:C6,"Done")</code> returns 3. The text criterion is in quotation marks. Use a consistent status list so variations such as “Complete” and “Done” are not unintentionally treated as the same label.</p>
<h2>Count a numeric threshold</h2><p>If B2:B6 contains 3, 10, 12, 7, and 10, <code>=COUNTIF(B2:B6,"&gt;=10")</code> returns 3. The comparison operator and number are included in the criterion text. To use a threshold stored in E1, a common form is <code>=COUNTIF(B2:B6,"&gt;="&amp;E1)</code>.</p>
<h2>Review the range</h2><p>The first and last cells are included. If records extend beyond row 6, the example range does not include them. Exclude the header unless it is intentionally part of the count, and check whether your spreadsheet uses a table or expandable range.</p>
<h2>Know the limits</h2><p>COUNTIF evaluates one criterion. For multiple conditions, use a supported function such as COUNTIFS and verify its syntax. Wildcards, comparison behavior, and case sensitivity can be relevant; consult your application's documentation when the matching rules matter.</p>
<h2>Verify with a small list</h2><p>Count the example manually, change one status or number, and check the output changes by the expected amount. If it does not, examine extra spaces, data types, and whether the formula covers the right rows.</p>`,sources:[ref.countif,ref.count]
},
{
 slug:'sumif-category-total',category:'Conditional analysis',title:'SUMIF: add values for one category',
 description:'Sum values whose corresponding category matches a criterion, using ranges with aligned rows.',
 takeaway:'SUMIF compares a criteria range and adds values from the corresponding rows of a sum range.',
 body:`<h2>Arrange the input</h2><p>Put categories in A2:A5 and amounts in B2:B5. For example: Supplies/12, Travel/20, Supplies/8, Travel/5. Each category and amount must be on the same row.</p>
<h2>Write the formula</h2><p><code>=SUMIF(A2:A5,"Supplies",B2:B5)</code> returns 20 for the two Supplies rows. The first range is checked for the criterion; the third argument provides the numbers to add. Use ranges of the same shape and aligned rows to make the relationship clear and portable.</p>
<h2>Refer to a cell for the criterion</h2><p>If D2 contains Supplies, <code>=SUMIF(A2:A5,D2,B2:B5)</code> lets you change the category without editing the formula. A blank or misspelled category can change the result, so use a consistent list and check the source data.</p>
<h2>Check a nonmatching category</h2><p>The Travel total in the sample is 25. If the formula returns a different result, confirm that amounts are numeric and that both ranges begin and end on the corresponding rows. A zero result can mean there are no matching rows; it is not always a formula error.</p>
<h2>Know when to use a different tool</h2><p>For multiple conditions, consider SUMIFS in supported versions and read its different argument order carefully. For a flexible summary of several categories, a pivot table may be useful, but its range and refresh behavior also need checking.</p>`,sources:[ref.sumif,ref.functions]
},
{
 slug:'percentage-of-total',category:'Conditional analysis',title:'Percentage of a total: divide first, then format',
 description:'Calculate a share of a total, format it as a percentage, and handle a zero denominator deliberately.',
 takeaway:'A share is part ÷ total. Store the resulting fraction and apply percentage formatting rather than multiplying twice.',
 body:`<h2>Use a simple example</h2><p>If 30 tasks are complete out of 120 tasks, enter 30 in B2 and 120 in C2. <code>=B2/C2</code> returns 0.25. Formatting that result as a percentage displays 25%.</p>
<h2>Keep the denominator meaningful</h2><p>Both numbers should describe the same population and period. A count of completed tasks this week divided by all tasks ever created may be a valid metric only if that is what you intend. Label the numerator, denominator, and period.</p>
<h2>Avoid double scaling</h2><p>If you use <code>=B2/C2*100</code>, the numeric result is 25. Applying percentage formatting to that result would display 2,500% in many spreadsheet programs. Either keep the fraction and format it as a percentage, or multiply by 100 and display it as an ordinary number with a clear label.</p>
<h2>Handle zero or missing totals</h2><p>Division by zero is undefined. One explicit example is <code>=IF(C2=0,"",B2/C2)</code>, which displays an empty string when the total is zero. Decide whether a blank, a message, or another result is appropriate; a missing total is not automatically the same as a true zero.</p>
<h2>Check the result</h2><p>Use a small case you can calculate mentally: 1 out of 4 should show 25%, and 4 out of 4 should show 100%. If the part can exceed the total, a result over 100% may be possible but should be investigated in context.</p>`,sources:[ref.formulas,ref.functions]
},
{
 slug:'percentage-change-formula',category:'Conditional analysis',title:'Percentage change: compare a new value with a positive starting value',
 description:'Calculate change relative to an original value and understand the difference between percent and percentage points.',
 takeaway:'For a positive starting value, percentage change is (new − old) ÷ old. A zero starting value has no defined percentage change.',
 body:`<h2>Choose the baseline</h2><p>If an amount rises from 80 to 100, the absolute change is 20. Divide that difference by the old value: 20 ÷ 80 = 0.25, or a 25% increase. With old in B2 and new in C2, use <code>=(C2-B2)/B2</code> and format the result as a percentage.</p>
<h2>Test a decrease</h2><p>A change from 100 to 80 is −20 ÷ 100 = −0.20, or a 20% decrease. The increase and decrease have different percentages because they use different starting values. Use the original value for the comparison you are describing.</p>
<h2>Handle zero and negative baselines</h2><p>When the old value is zero, the formula divides by zero and a conventional percentage change is undefined. Report the absolute change or choose a different metric. Negative baselines can be ambiguous in interpretation; define the rule for your context instead of assuming the simple positive-baseline explanation applies.</p>
<h2>Percent versus percentage points</h2><p>If a rate changes from 20% to 25%, the change is five percentage points. Relative to the original 20% rate, the increase is 25%. These describe different things; label the metric so the reader can distinguish them.</p>
<h2>Check with the calculator</h2><p>Our <a href="/tools/percentage-change/">Percentage Change Calculator</a> accepts a positive starting value and a nonnegative new value. It reports both the absolute and percentage change without accessing your spreadsheet.</p>`,sources:[ref.formulas,ref.functions]
},
{
 slug:'weighted-average-sumproduct',category:'Conditional analysis',title:'Weighted average with SUMPRODUCT: when values matter unequally',
 description:'Combine values with weights, check the denominator, and compare a weighted result with a simple mean.',
 takeaway:'A weighted average is the sum of each value multiplied by its weight, divided by the sum of the weights.',
 body:`<h2>Set up a small example</h2><p>Put scores 80, 90, and 70 in B2:B4 and weights 20, 30, and 50 in C2:C4. The weights can be counts or consistent relative weights; they do not have to be stored as percentages if the calculation divides by their total.</p>
<h2>Use the formula</h2><p><code>=SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4)</code> calculates (80×20 + 90×30 + 70×50) ÷ 100 = 78. The ranges must line up row by row and have compatible dimensions.</p>
<h2>Compare with a simple average</h2><p><code>=AVERAGE(B2:B4)</code> gives 80, because it treats all three scores equally. The weighted result is lower because the score of 70 has the largest weight. Choose the method that reflects the question, not the one that produces the preferred number.</p>
<h2>Validate the weights</h2><p>For an ordinary weighted average, check that weights are numeric and nonnegative and that their sum is greater than zero. A zero total causes division by zero. Decide what to do with missing scores before calculating; a missing value and a zero score are not necessarily equivalent.</p>
<h2>Test one change</h2><p>Give the 90 score a larger weight and check that the result moves toward 90, assuming the other weights remain nonnegative. Review range endpoints when new rows are added and verify how your spreadsheet version handles nonnumeric entries.</p>`,sources:[ref.functions,ref.formulas]
},
{
 slug:'sort-versus-filter',category:'Working with data',title:'Sort versus filter: reorganize or narrow a spreadsheet view',
 description:'Understand the difference, protect row relationships, and avoid mistaking hidden records for deleted records.',
 takeaway:'Sorting changes the order of records; filtering changes which records are shown. Select the complete related data range.',
 body:`<h2>What sorting does</h2><p>Sorting a task list by due date changes the order of the records. Select the whole table so each task stays with its owner, due date, and status. Sorting a single column independently can separate related values and damage the meaning of the rows.</p>
<h2>What filtering does</h2><p>A filter can display only rows whose status is Open. The other rows are hidden from the view, not necessarily deleted. Remove or clear the filter when you need to see the full set again. Filter features and shared-view behavior vary between applications.</p>
<h2>Prepare the data</h2><p>Use a single header row with unique names and avoid blank rows within the source data. Check that dates are real date values and numbers are numeric; text dates and numeric dates may sort differently. Back up important data before a major reorganization.</p>
<h2>Check calculations</h2><p>A normal SUM over the entire range may include filtered-out rows. If you need a visible-rows-only calculation, use and test an appropriate function or feature for your application rather than assuming a regular total changed with the filter.</p>
<h2>Test with three records</h2><p>Give three fictional tasks distinct owners and dates. Sort by date, then verify that each owner remains next to the original task. Filter to one status and clear the filter to confirm the hidden records return.</p>`,sources:[ref.sort,ref.formulas]
},
{
 slug:'find-duplicate-values',category:'Working with data',title:'Find duplicate values with COUNTIF before deleting anything',
 description:'Flag repeated IDs in a range and decide whether duplicates are actually errors in your dataset.',
 takeaway:'A repeated value is a signal to review, not automatic proof that one record should be removed.',
 body:`<h2>Choose the right identifier</h2><p>Two people can share a name, and one customer may have multiple orders. Decide whether the column represents a unique record ID, a customer, an email address, or something else. The definition determines whether repetition is a problem.</p>
<h2>Flag repeated IDs</h2><p>For IDs in A2:A100, enter this in B2 and copy down: <code>=IF(A2="","",COUNTIF($A$2:$A$100,A2)&gt;1)</code>. A repeated nonblank value returns TRUE. The dollar signs keep the comparison range fixed as the row reference A2 changes.</p>
<h2>Understand the result</h2><p>The formula flags every occurrence of a repeated ID, including the first one. It does not choose which row is correct or compare other columns. The range ends at row 100, so extend it or use an appropriate table feature if records continue farther.</p>
<h2>Inspect potential causes</h2><p>Extra spaces, leading zeros, text versus numeric IDs, or import rules can make values that look alike compare differently. Conversely, your spreadsheet's matching rules may treat some text variations as equivalent. Test representative examples before acting on the flag.</p>
<h2>Keep a recovery path</h2><p>Work on a copy and compare the full rows before removing or merging anything. Preserve a source file or version history. A verified unique key is more reliable than deleting rows based on a single repeated name.</p>`,sources:[ref.countif,ref.refs]
},
{
 slug:'dropdown-data-validation',category:'Working with data',title:'Create a dropdown list for consistent spreadsheet entries',
 description:'Plan status choices, set data validation in Excel or Google Sheets, and test how invalid entries are handled.',
 takeaway:'A dropdown can make entries consistent, but its validation settings determine whether other values are rejected or merely warned about.',
 body:`<h2>Define the choices first</h2><p>For a simple task tracker, choose a short list such as Not started, In progress, and Done. Decide what each label means before applying it; a dropdown cannot fix an unclear workflow.</p>
<h2>Set up a source list</h2><p>Place the options in a small, clearly labeled area or enter them directly if the application supports it. Select the cells that should receive the dropdown, excluding the header. Leave room for future records or plan how you will extend the validation range.</p>
<h2>Apply data validation</h2><p>In Excel, use Data Validation and a List source; in Google Sheets, use a dropdown or data-validation rule. Menus and capabilities can vary by version. Follow the linked application instructions for choosing a range or manually entered options.</p>
<h2>Choose invalid-entry behavior</h2><p>Decide whether an unlisted value should be rejected or only show a warning, where the application offers that choice. Pasting and existing data may need additional checking. A dropdown is a helpful control, not a guarantee that the entire table is valid.</p>
<h2>Test and maintain</h2><p>Try selecting each status, typing an invalid value, and adding a new row. Confirm that summaries count the exact labels you use. If the list changes later, check existing formulas and records before removing an old option.</p>`,sources:[ref.validation,ref.sheetsValidation]
},
{
 slug:'vlookup-exact-match',category:'Working with data',title:'VLOOKUP with an exact match: find a value in a small table',
 description:'Use FALSE for an exact match, fix the lookup range when copying, and understand missing and duplicate IDs.',
 takeaway:'VLOOKUP searches the first column of the selected table and can return a value from a column to its right.',
 body:`<h2>Build the lookup table</h2><p>Put unique product IDs in A2:A100, names in B2:B100, and prices in C2:C100. The value to search for is in E2. Check that IDs are consistent and that prices are numeric where needed.</p>
<h2>Write the exact-match formula</h2><p><code>=VLOOKUP(E2,$A$2:$C$100,3,FALSE)</code> searches the first column of the fixed A:C range for E2 and returns the value from the third column of that range. FALSE requests an exact match. The dollar signs help keep the table range fixed when copying the formula down.</p>
<h2>Interpret a missing result</h2><p>If no exact match is found, the formula can return #N/A. Confirm the ID exists and inspect leading zeros, extra spaces, and text-versus-number differences. Do not immediately replace every error with zero if zero could be mistaken for a real price.</p>
<h2>Check duplicate keys</h2><p>When the lookup column contains duplicate matches, VLOOKUP returns the first matching result in its search order. If each ID should identify one product, flag and resolve duplicates in the source table before relying on the lookup.</p>
<h2>Know the boundaries</h2><p>VLOOKUP searches the leftmost column of the selected table and returns from a column to its right. Inserting a column can affect the column index. Newer alternatives such as XLOOKUP have different availability by application and version; confirm compatibility before sharing.</p>`,sources:[ref.lookup,ref.refs]
},
{
 slug:'iferror-with-care',category:'Working with data',title:'IFERROR: make a spreadsheet clearer without hiding the cause',
 description:'Use a fallback for expected errors, then inspect the underlying formula and source data.',
 takeaway:'IFERROR can replace several kinds of errors with a fallback. Use it only after deciding what the fallback means.',
 body:`<h2>See the basic pattern</h2><p><code>=IFERROR(A2/B2,"")</code> displays an empty string if the division produces an error, and otherwise displays the result. This can make a report less cluttered, but the reader no longer sees why the calculation failed.</p>
<h2>Prefer an explicit condition when possible</h2><p>If the specific issue is a zero denominator, <code>=IF(B2=0,"",A2/B2)</code> makes that condition visible in the formula. Decide how blank inputs should be handled as well; a blank is not necessarily a measured zero.</p>
<h2>Do not hide a missing lookup as a real zero</h2><p>A lookup may fail because an ID is missing, contains extra spaces, or has a different data type. Returning 0 can look like a genuine quantity or price. A message such as “Check ID” may be safer when it fits the workflow.</p>
<h2>Debug before adding the wrapper</h2><p>Test the underlying formula on its own. Verify references, input types, and a known correct case. Add IFERROR only after you understand which errors may occur and what the fallback should communicate.</p>
<h2>Document the decision</h2><p>Tell readers whether a blank result means missing input, a zero denominator, or another error. For critical records, keep a separate error-check column or review process rather than relying on a visually clean report.</p>`,sources:[ref.errors,ref.functions]
},
{
 slug:'simple-task-tracker',category:'Practical workflows',title:'Build a simple task tracker with status and due date',
 description:'Use a small, consistent table and an optional formula to flag overdue unfinished tasks.',
 takeaway:'A useful tracker needs clear ownership, a valid due date, and consistent status values more than a complicated design.',
 body:`<h2>Set up the columns</h2><p>Use Task ID, Task, Owner, Due date, and Status as headers. One row represents one task. A short dropdown list such as Not started, In progress, and Done makes the status column easier to filter and count.</p>
<h2>Enter reliable dates</h2><p>Keep due dates as date values rather than free-text phrases such as “next Friday.” Check the spreadsheet's locale and date format. A date-only deadline is different from a deadline at a particular time; record time and time zone separately when needed.</p>
<h2>Flag an overdue task</h2><p>If due date is in D2 and status is in E2, one example is <code>=IF(D2="","",IF(AND(D2&lt;TODAY(),E2&lt;&gt;"Done"),"Overdue",""))</code>. It leaves a blank when D2 is empty and flags an unfinished task whose due date is before today. Test the status text and references in your own sheet.</p>
<h2>Understand “today”</h2><p>A task due today is not flagged by the strict less-than comparison. TODAY reflects the spreadsheet's current date when it recalculates, which can depend on application settings and time zone. Decide separately whether a due-today task needs a warning.</p>
<h2>Keep the tracker maintainable</h2><p>Filter by owner or status when planning work, then clear the filter to see everything. Check that new rows receive the validation and formulas. Avoid sharing sensitive personal information with people who do not need access.</p>`,sources:[ref.today,ref.sheetsValidation,ref.locale]
},
{
 slug:'expense-log-structure',category:'Practical workflows',title:'Create a simple expense log that can be summarized later',
 description:'Organize dates, categories, amounts, and notes so a spreadsheet remains useful for review.',
 takeaway:'Separate one transaction per row and use consistent categories. A tidy log is a recordkeeping tool, not financial advice.',
 body:`<h2>Choose the columns</h2><p>Start with Date, Description, Category, Amount, and an optional note or reference. One row should describe one transaction. Decide whether refunds will be negative amounts or stored separately, then use that convention consistently.</p>
<h2>Keep values usable</h2><p>Store dates as recognized dates and amounts as numbers, with a separate currency convention. Formatting a text value as currency may not turn it into a number. If multiple currencies appear, identify them and do not add unlike amounts without an appropriate conversion method.</p>
<h2>Summarize a category</h2><p>If categories are in C2:C100 and amounts in D2:D100, <code>=SUMIF(C2:C100,"Supplies",D2:D100)</code> adds numeric amounts for rows marked Supplies. Check the range when adding records and verify the result against a few entries by hand.</p>
<h2>Review before sharing</h2><p>Receipts and descriptions can contain sensitive information. Share only with intended recipients, limit access where the platform supports it, and keep a copy of the original import. A CSV export may not preserve workbook formatting or multiple sheets.</p>
<h2>Reconcile regularly</h2><p>Compare the number of records and totals with the original source for the same period. Look for duplicates, missing transactions, and inconsistent categories. The spreadsheet organizes information; tax, accounting, or legal treatment may require qualified advice.</p>`,sources:[ref.sumif,ref.csv]
},
{
 slug:'inventory-reorder-tracker',category:'Practical workflows',title:'Make a basic inventory tracker with a reorder flag',
 description:'Record stock and reorder thresholds, then use an IF formula to flag items for review.',
 takeaway:'A reorder flag is only as reliable as the stock count, threshold, and timing recorded in the sheet.',
 body:`<h2>Define one row per item</h2><p>Use Item ID, Item name, Current quantity, Reorder threshold, and Status. Decide whether quantity means physical stock, available stock after reservations, or another measure. Keep the unit, such as pieces or boxes, consistent for each item.</p>
<h2>Add a simple flag</h2><p>If quantity is in C2 and threshold in D2, <code>=IF(OR(C2="",D2=""),"Check input",IF(C2&lt;=D2,"Review reorder","OK"))</code> flags a quantity at or below the threshold. The blank check avoids treating an absent input as a reliable zero. Adjust the rule if your operation uses a different trigger.</p>
<h2>Test the boundary</h2><p>With a threshold of 10, quantities of 9 and 10 should show Review reorder; 11 should show OK. Missing quantity or threshold should show Check input. Test these cases before copying the formula down.</p>
<h2>Do not confuse a flag with an order</h2><p>The formula does not know lead times, expected demand, minimum order quantities, stock in transit, or supplier availability. Use it to identify rows for human review, then decide the order quantity using current information.</p>
<h2>Maintain the source</h2><p>Record when stock was last counted, control who can edit the sheet, and check for duplicate IDs. A polished dashboard cannot correct outdated or inconsistent source data.</p>`,sources:[ref.ifs,ref.validation]
},
{
 slug:'spreadsheet-date-reminders',category:'Practical workflows',title:'Create a date reminder in a spreadsheet without confusing text and dates',
 description:'Add days to a valid date, compare against today, and account for locale and recalculation settings.',
 takeaway:'Date calculations require recognized date values. Be explicit about whether a deadline includes the current day, time, and time zone.',
 body:`<h2>Enter an unambiguous date</h2><p>Use a date format your application and locale recognize. A value that only looks like a date may still be text. Check formatting and test a small calculation before building a reminder column. In Google Sheets, locale and time zone settings affect default date interpretation and current-date behavior.</p>
<h2>Add calendar days</h2><p>If B2 contains a valid date, <code>=B2+7</code> gives the date seven calendar days later in common spreadsheet applications. Apply a date display format if the result appears as a number. This does not automatically skip weekends or holidays.</p>
<h2>Compare with today</h2><p>With a due date in C2, <code>=IF(C2="","",IF(C2&lt;TODAY(),"Past due","Not past due"))</code> leaves a blank for a missing date and marks dates before today as past due. A date equal to today is not past due under this rule.</p>
<h2>Check time and recalculation</h2><p>TODAY changes as the spreadsheet recalculates. A date-only comparison does not encode a 3 p.m. deadline or a separate time zone for each person. For time-sensitive workflows, define the time, zone, and recalculation behavior explicitly.</p>
<h2>Test representative cases</h2><p>Try yesterday, today, tomorrow, and an empty cell. Verify the display and expected labels in your spreadsheet. If you need business-day calculations or holidays, consult the application documentation and define the holiday list rather than treating seven calendar days as seven working days.</p>`,sources:[ref.today,ref.locale,ref.functions]
},
{
 slug:'choose-a-simple-chart',category:'Practical workflows',title:'Choose a simple spreadsheet chart that answers the question',
 description:'Match a chart to a comparison or time trend and check the data range, labels, and scale.',
 takeaway:'Start with the question and the source table. A clear chart needs meaningful labels, a suitable scale, and the right range.',
 body:`<h2>Decide what you want to compare</h2><p>To compare totals across categories, a bar or column chart can make differences easy to scan. To show values across an ordered sequence of dates, a line chart may be appropriate. Neither choice fixes incomplete or incorrectly categorized source data.</p>
<h2>Prepare a small summary</h2><p>If raw transactions contain many rows, first build a table with one category and one total per row. Check the totals against a manual sample. Avoid charting an ID column or a subtotal as if it were another category.</p>
<h2>Label the context</h2><p>Give the chart a descriptive title and label units and the time period. Make the axes readable. For a bar chart representing magnitude, a zero baseline is often helpful for a fair comparison; disclose or reconsider a truncated scale that exaggerates a small difference.</p>
<h2>Check the source range</h2><p>Add a test row and confirm whether the chart includes it. Different chart and table features update ranges differently. Filtered or hidden rows may also affect chart behavior depending on the application and settings.</p>
<h2>Review with a reader</h2><p>Ask what conclusion a reader can draw without extra explanation. Remove unnecessary decoration, preserve labels, and provide a small table if exact values matter. A chart summarizes the data you supply; it does not establish causation.</p>`,sources:[ref.sort,ref.formulas]
}
];
for(const [i,a] of articles.entries()){
 a.number=String(i+1).padStart(2,'0');
 a.read=Math.max(1,Math.ceil((a.takeaway+' '+a.body.replace(/<[^>]+>/g,' ')).trim().split(/\s+/).length/180));
}

const practicalChecks={
'cells-rows-columns-ranges':`<h2>Check what a range includes</h2><p>If a header is in B1 and the data is in B2:B6, a formula using B1:B6 also includes the header cell. Some functions ignore text in a referenced range, while others count it. Choose the range based on what the formula is meant to measure, not just what happens to produce the expected result once.</p>`,
'build-a-clean-data-table':`<h2>Separate raw input from a summary</h2><p>Keep the original records on one sheet and place a summary in another area or sheet when the workflow benefits from it. Give the summary a date or period label. If you need to correct a record, update the source and recheck the summary rather than editing a calculated total by hand.</p>`,
'numbers-stored-as-text':`<h2>Try a mixed-data check</h2><p>Put a numeric 12 in one test cell and a text entry that looks like 12 in another. Apply <code>=ISNUMBER(B2)</code> and its equivalent to the second cell. If the results differ, inspect how the values were imported. The right action depends on whether the column represents a quantity or an identifier.</p>`,
'spreadsheet-format-vs-value':`<h2>Check a hand-calculated example</h2><p>Enter 0.125 and display it as a percentage. The visible value should be 12.5% when that format is applied. If you need the numeric result to be 12.5 rather than 0.125, use a separate calculation and label it clearly so the value is not formatted as a percentage a second time.</p>`,
'csv-versus-xlsx':`<h2>When to keep both</h2><p>Keep an XLSX master when the working file needs formulas or multiple tabs, and create a separate CSV for an import that requires it. Name the export with its purpose and date. After export, compare a few identifiers, special characters, dates, and totals in the destination before deleting anything.</p>`,
'sum-and-average':`<h2>Test an additional record</h2><p>Reset B6 to 15, then place a sixth value of 10 in B7. The original B2:B6 formulas still return 40 and 8. After intentionally extending both ranges to B2:B7, the sum should be 50 and the average approximately 8.3333. This test shows why a new row must be included deliberately.</p>`,
'relative-absolute-references':`<h2>Review copied formulas</h2><p>Click the first and a later copied cell and inspect the formula text. The row-specific reference should follow the record, while the fixed reference should point to the same shared input. If copying across as well as down, test a corner of the filled block before extending it.</p>`,
'if-formula-basics':`<h2>Choose meaningful labels</h2><p>The label “Order” is only an example of a threshold response. It does not place an order or check stock in transit. Choose words that match the action a person should review, and describe who maintains the threshold if several people edit the sheet.</p>`,
'count-versus-counta':`<h2>Count records rather than arbitrary cells</h2><p>If every valid task has a unique ID in column A, counting populated IDs can be a useful starting point. It still needs checks for duplicate or missing IDs. A count of names, notes, or formulas in another column may describe a different population.</p>`,
'rounding-in-spreadsheets':`<h2>Document where rounding happens</h2><p>If a report uses row-level rounded amounts, record that rule near the calculation and keep the unrounded source where appropriate. Do not replace original data merely to make a displayed total match; determine the correct rule for the task and verify a few boundary cases.</p>`,
'countif-one-condition':`<h2>Check the criterion source</h2><p>If the criterion is typed into D2, verify that D2 contains the intended status and not an extra trailing space. For a larger workflow, a maintained dropdown can reduce spelling differences. Test a nonmatching value as well as a known match so a zero result is meaningful.</p>`,
'sumif-category-total':`<h2>Test alignment by changing one row</h2><p>In the sample, change the second Supplies amount from 8 to 10. The Supplies total should rise from 20 to 22 while the Travel total remains 25. If both totals change, inspect whether categories and amounts are in the intended rows and ranges.</p>`,
'percentage-of-total':`<h2>Decide what a blank means</h2><p>The example formula suppresses a zero-denominator result, but it can make a missing input less obvious. If the sheet is used by a team, consider a separate status column that says “Enter total” when the denominator is missing. Check that the message cannot be mistaken for a calculated percentage.</p>`,
'percentage-change-formula':`<h2>Make the comparison reproducible</h2><p>Label the old and new periods beside the values. If the period order is reversed, both the sign and denominator change. For a series, decide whether each row compares with the previous period or with a fixed baseline and use the corresponding references consistently.</p>`,
'weighted-average-sumproduct':`<h2>Try a zero-weight case</h2><p>With the sample scores and weights 20, 30, and 0, the weighted result becomes (80×20 + 90×30) ÷ 50 = 86. The third score contributes no weight. If all weights are zero, there is no defined weighted average; show a clear message instead of dividing.</p>`,
'sort-versus-filter':`<h2>Before sorting a shared sheet</h2><p>Tell collaborators what range you intend to sort and whether their view or the underlying order may change. Some applications provide personal filter views, while others may apply a shared filter. Confirm the feature and permissions in the version your team actually uses.</p>`,
'find-duplicate-values':`<h2>Test the flag</h2><p>Enter A101, A102, and A101 into three test rows inside the comparison range. The first and third should be flagged TRUE; the middle should be FALSE. An empty ID should remain visually blank under the example formula. Then inspect the full records before making any change.</p>`,
'dropdown-data-validation':`<h2>Plan for changed labels</h2><p>If “In progress” becomes “Active,” existing records may still contain the old label. Update the source records and any COUNTIF or SUMIF criteria together after reviewing the impact. A dropdown list and its summary formulas should use the same controlled vocabulary.</p>`,
'vlookup-exact-match':`<h2>Try an ID that does not exist</h2><p>A useful test set includes one known ID, one missing ID, and an ID with a leading zero. Check that the first returns the expected value and investigate #N/A on the others. If a second matching ID exists, verify whether returning the first match is acceptable.</p>`,
'iferror-with-care':`<h2>Choose a visible fallback</h2><p>A message such as “Check input” can be clearer than a blank when someone must act. If the result is used in another numeric formula, a text message may require a different downstream design. Test the full chain rather than changing an error display in isolation.</p>`,
'simple-task-tracker':`<h2>Try three dates</h2><p>In a disposable copy, enter yesterday, today, and tomorrow with status In progress. The example flags only yesterday. Change the first status to Done and it should no longer be flagged. A blank due date should also remain visually blank.</p>`,
'expense-log-structure':`<h2>Check refunds and totals</h2><p>If a purchase is 40 and a later refund is recorded as −10, their combined amount is 30 under the signed-amount convention. Keep both rows and a clear description so the adjustment remains traceable. Do not mix positive and negative conventions without documenting them.</p>`,
'inventory-reorder-tracker':`<h2>Compare like units</h2><p>If current stock is entered in individual pieces but the threshold is expressed in boxes, convert them to a consistent unit before comparison. A supplier's pack size can change, so label the unit and maintain the conversion information rather than hiding it inside an unexplained number.</p>`,
'spreadsheet-date-reminders':`<h2>Keep the original date</h2><p>Put the reminder in a separate column rather than replacing the source date. If the source date changes, review the calculated deadline and its meaning. For a historical record of when an action actually happened, enter or record that date separately; TODAY is not a permanent timestamp.</p>`,
'choose-a-simple-chart':`<h2>Check the story against the table</h2><p>Compare the largest and smallest plotted values with the source summary and look for unexpected gaps. If exact differences are small, a table beside the chart may be clearer. Keep the chart's category names and units consistent with the underlying data.</p>`
};
for(const a of articles){a.body+=practicalChecks[a.slug]||'';a.read=Math.max(1,Math.ceil((a.takeaway+' '+a.body.replace(/<[^>]+>/g,' ')).trim().split(/\s+/).length/180));}
