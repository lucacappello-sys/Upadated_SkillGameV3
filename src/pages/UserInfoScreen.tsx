import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/useGame';
import '../assets/styles/userinfoscreen.scss';

export default function UserInfoScreen() {
  const navigate = useNavigate();
  const { updateHeader, updateFooter, resetGame, saveUserInfoToSupabase } = useGame();
  const [form, setForm] = useState({ role: '', sector: '', country: '' });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Nascondiamo l'header standard per pulizia, o lo lasciamo vuoto
    updateHeader({ title: '', subtitle: '' });

    // Disabilitiamo il footer standard perché il pulsante di salvataggio è nel form
    updateFooter({ isVisible: false });
  }, [updateHeader, updateFooter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await saveUserInfoToSupabase({
        jobTitle: form.role,
        industry: form.sector,
        country: form.country
      });

      alert("Saved successfully!");
      resetGame();
      navigate('/');
    } catch (error) {
      console.error("Error saving user info:", error);
      alert("Failed to save user info. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const isValid = form.role && form.sector && form.country;

  return (
    <div className="page-content">
      <div className="user-info-content">
        <div className="user-info-card">
          <h2 className="user-info-card__title">Tell us about you!</h2>

          <form className="info-form" onSubmit={handleSave}>
            <div className="info-form__group">
              <label className="info-form__label">Job title / Role *</label>
              <input
                name="role"
                className="info-form__input"
                placeholder="Input"
                value={form.role}
                onChange={handleChange}
              />
            </div>
            <div className="info-form__group">
              <label className="info-form__label">Industry / Sector *</label>
              <input
                name="sector"
                className="info-form__input"
                placeholder="Input"
                value={form.sector}
                onChange={handleChange}
              />
            </div>
            <div className="info-form__group">
              <label className="info-form__label">Country in which you work *</label>
              <input
                name="country"
                className="info-form__input"
                placeholder="Input"
                value={form.country}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="info-form__save-button"
              disabled={!isValid || isSaving}
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}