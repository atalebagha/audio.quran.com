import qaris from './qaris';
import audio_files from './audio_files';
import surahs from './surahs';
import sections from './sections';

export default (app) => {
  app.use('/qaris', qaris);
  app.use('/audio_files', audio_files);
  app.use('/surahs', surahs);
  app.use('/sections', sections);
};
