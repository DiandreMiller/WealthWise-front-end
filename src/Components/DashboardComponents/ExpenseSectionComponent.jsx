import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const ExpenseSectionComponent = ({
  isAddingExpense,
  expenseDescription,
  setExpenseDescription,
  expenseAmount,
  setExpenseAmount,
  addExpense,
  setIsAddingExpense,
  expenseCategories,
  setExpenseCategories,
  isRecurringExpense,
  setIsRecurringExpense,
  darkMode
}) => {
  const defaultExpenseCategories = [
    'housing',
    'utilities',
    'transportation',
    'groceries',
    'subscriptions',
    'debt',
    'childcare',
    'insurance',
    'savings contributions',
    'pet expenses',
    'medical bills',
    'major purchase',
    'travel',
    'repairs',
    'gifts',
    'donations',
    'events',
    'education',
    'loans',
    'legal fees',
    'unplanned expense',
    'entertainment',
    'other',
  ];

  const handleDescriptionChange = (event) => {
    const sanitizedDescription = DOMPurify.sanitize(event.target.value);
    setExpenseDescription(sanitizedDescription);
  }

  const handleAmountChange = (event) => {
    const sanitizedAmount = DOMPurify.sanitize(event.target.value);
    setExpenseAmount(sanitizedAmount);
  }

  return (
    // <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
    <div
      className={`shadow-lg rounded-lg p-6 border ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
      <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Expenses</h2>
      {isAddingExpense ? (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Expense Description"
            value={expenseDescription}
            onChange={handleDescriptionChange}
            className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white`}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={handleAmountChange}
            className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white`}
          />

          <div>
            <select
              value={isRecurringExpense === null ? "" : isRecurringExpense ? "Yes" : "No"}
              onChange={(event) => {
                const selectedValue =
                  event.target.value === "Yes" ? true : event.target.value === "No" ? false : null;
                // console.log("Is this expense recurring:", selectedValue);
                setIsRecurringExpense(selectedValue);
              }}
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white`}
              id="recurring-expense-dropdown"
            >
              <option value="" disabled>
                Is this expense recurring?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <select
              value={expenseCategories || ""}
              onChange={(event) => {
                const selectedCategory = event.target.value || null;
                // console.log("Selected expense category:", selectedCategory);
                setExpenseCategories(selectedCategory);
              }}
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white`}
              id="expense-category-dropdown"
            >
              <option value="" disabled>
                Select an expense category
              </option>
              {defaultExpenseCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors"
              onClick={addExpense}
            >
              Add
            </button>
            <button
              className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition-colors"
              onClick={() => setIsAddingExpense(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsAddingExpense(true)}
        >
          Add Expense
        </button>
      )}
    </div>
  );
};

ExpenseSectionComponent.propTypes = {
  isAddingExpense: PropTypes.bool.isRequired,
  expenseDescription: PropTypes.string.isRequired,
  setExpenseDescription: PropTypes.func.isRequired,
  expenseAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setExpenseAmount: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  setIsAddingExpense: PropTypes.func.isRequired,
  expenseCategories: PropTypes.string,
  setExpenseCategories: PropTypes.func.isRequired,
  isRecurringExpense: PropTypes.bool,
  setIsRecurringExpense: PropTypes.func.isRequired,
  darkMode: PropTypes.func.isRequired,
};

export default ExpenseSectionComponent;
