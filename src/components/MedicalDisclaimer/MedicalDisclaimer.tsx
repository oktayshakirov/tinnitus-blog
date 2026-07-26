import Typography from '@mui/material/Typography';
import { StyledDisclaimer } from './MedicalDisclaimer.styled';

/**
 * Shown on health posts. Being explicit that the site is not a clinical source
 * - and pointing readers at a professional - is an E-E-A-T expectation for YMYL.
 */
const MedicalDisclaimer = () => (
  <StyledDisclaimer>
    <Typography component="p" variant="body2">
      <strong>Medical disclaimer:</strong> This article is for information only
      and is not medical advice. Tinnitus can have many underlying causes, some
      of which need investigation. Please speak with a doctor or audiologist
      about your own symptoms - especially if your tinnitus is new, one-sided,
      pulsing in time with your heartbeat, or comes with hearing loss or
      dizziness.
    </Typography>
  </StyledDisclaimer>
);

export default MedicalDisclaimer;
