import React from 'react';

const ReviewFormItem = ({field, updateField}) => {
  let fieldTitle;
  if (field === "street_parking") {
    fieldTitle = "Easy street parking?";
  } else if (field === "good_for_pets" || field === "good_for_bikes") {
    let words = field.split("_");
    let lastWord = words[words.length - 1];
    let capLastWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
    fieldTitle = `${capLastWord} friendly?`;
  } else {
    let words = field.split("_");
    fieldTitle = `Good for ${words[words.length - 1]}?`;
  }

  const handleClick = (inputField) => {
    return (e) => {
      updateField(inputField, e.target.value);
    };
  };

  return (
    <fieldset className={field}>
      <h5>{fieldTitle}</h5>
      <div className="review-form-item">
        <label>
          <h6>yes</h6>
          <input type="radio" value="true" name={field} onClick={handleClick({field})}></input>
        </label>
        <label>
          <h6>no</h6>
          <input type="radio" value="false" name={field} onClick={handleClick({field})}></input>
        </label>
        <label>
          <h6>unsure</h6>
          <input type="radio" value="null" name={field} onClick={handleClick({field})}></input>
        </label>
      </div>
    </fieldset>
  );
};

export default ReviewFormItem;
