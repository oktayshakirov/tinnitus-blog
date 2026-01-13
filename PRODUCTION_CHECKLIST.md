# Production Readiness Checklist

## ✅ Current Status

### Ready for Production:
- ✅ ViewsCounter component implemented and typed correctly
- ✅ Firebase Admin setup complete (both .js and .cjs versions)
- ✅ API route `/api/views/[type]/[slug]` working correctly
- ✅ ViewsCounter integrated in BlogPost and ZenPost pages
- ✅ Initial views data extracted from Google Analytics (55 entries, 2,920 views)
- ✅ Import script ready to run
- ✅ Build script fixed (removed import-ga-views from build process)

### Before Deploying:
1. **Import views to Firebase** (one-time operation):
   ```bash
   # Make sure .env has Firebase credentials:
   # FIREBASE_PROJECT_ID
   # FIREBASE_CLIENT_EMAIL
   # FIREBASE_PRIVATE_KEY
   
   node scripts/import-views-to-firebase.js
   ```

2. **Verify Firebase import**:
   - Check Firestore `views` collection
   - Verify 55 documents created
   - Verify view counts match `data/initial-views.json`

3. **Test ViewsCounter in production**:
   - Visit a blog post (e.g., `/blog/airpods-and-tinnitus`)
   - Visit a zen post (e.g., `/zen/white-noise`)
   - Verify view counts display correctly
   - Verify views increment on page load

## 🧹 Cleanup Tasks (After Import)

After successfully importing views to Firebase, remove the following in the next commit:

### Files to Delete:
1. `Pages_and_screens_Page_title_and_screen_class.csv` - Google Analytics export (no longer needed)
2. `scripts/import-ga-views.js` - One-time CSV parsing script
3. `scripts/import-views-to-firebase.js` - One-time Firebase import script
4. `data/README.md` - Documentation for import process
5. `data/initial-views.json` - Initial views data (optional - can keep for reference or delete)

### Directories to Remove:
1. `scripts/` - Remove entire directory if it becomes empty
2. `data/` - Remove entire directory if deleting initial-views.json

### Git Commands for Cleanup:
```bash
# After verifying Firebase import works:
git rm Pages_and_screens_Page_title_and_screen_class.csv
git rm scripts/import-ga-views.js
git rm scripts/import-views-to-firebase.js
git rm data/README.md
git rm data/initial-views.json
rmdir scripts  # if empty
rmdir data     # if empty
git commit -m "chore: remove one-time import scripts and data files"
```

## 📝 Notes

- The `data/initial-views.json` file can be kept for reference if you want a backup of the initial view counts
- If keeping `data/initial-views.json`, you can keep the `data/` directory but remove the README
- All Firebase credentials should remain in `.env` (already in .gitignore)
