export default function buttonStyle(type) {
  const style = document.createElement('style');

  style.textContent = `
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 10px;
      height: 32px;
      width: ${type === 'flexible' ? '160px' : 'auto'};
      
      background: linear-gradient(174.6deg, var(--white) 4.31%, var(--primary-yellow-100) 50.01%, var(--primary-yellow-200) 95.71%);

      border: 1px solid var(--primary-yellow-300);
      border-radius: 4px;

      font-weight: var(--bold-sm-weight);
      font-size: var(--bold-sm-size);
      line-height: var(--bold-sm-height);
      letter-spacing: var(--bold-sm-spacing);
    }

    button:hover {
      cursor: pointer;
    }
  `;
  return style;
}
