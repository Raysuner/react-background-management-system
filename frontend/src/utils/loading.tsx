import Loading from '../components/loading';
import { createRoot } from 'react-dom/client';

export function showLoading() {
  const div = document.createElement('div');
  div.id = 'loading';
  div.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  document.body.appendChild(div);
  createRoot(div).render(<Loading />);
}

export function hideLoading() {
  const loading = document.getElementById('loading');
  if (loading) {
    document.body.removeChild(loading);
  }
}
