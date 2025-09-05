# defectdojo
As docker is better than install in OS, we will go with it.

While inititing the dokcer compose you'd better check latest log of initializer to get randomly generated admin password each time you run the containers.

```bash
docker compose up
```

# Note inside the defectdojo:
In defectdojo we use `Product` instead of `Project` as eveolving process is almost permenant. so we create a product.
Create an engagement for specifi period and link it to your product.
Import scan result: id does `Done` and `Add Test` buttons functions and let you add import your scan.

To test this sast report i used the current project in  gitlab and enabled the SAST. It exported me a json file as a result that i used in defecdojo.

# Notes for app
To test the sast as a report in defect dojo you

# Notes gor git hub actions