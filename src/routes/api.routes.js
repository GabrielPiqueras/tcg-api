
// Archivo para manejar las rutas de la API
import Router from 'express';
import { methods as cardController } from '../controllers/card.controller';
import { methods as rarityController } from '../controllers/rarity.controller';
import { methods as tcgApiController } from '../controllers/tcgApi.controller';
import { methods as userController } from '../controllers/user.controller';

const router = Router();

// Import routes
router.get('/api/import-cards/:setId', tcgApiController.importCards);
router.get('/api/import-rarities', tcgApiController.importRatities);
router.get('/api/import-types', tcgApiController.importTypes);
router.get('/api/import-subtypes', tcgApiController.importSubtypes);
router.get('/api/import-sets', tcgApiController.importSets);

// Get data routes
router.get('/api/cards', cardController.getCards);
router.get('/api/rarities', rarityController.getRarities);

// Auth user
router.get('/api/auth-user', userController.authUser);
    
export default router;