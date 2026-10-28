
# Understanding Transfer Learning

Transfer learning reuses knowledge learned by a pretrained model
for a new task.

## Feature extraction

Freeze the pretrained backbone and train a new classification
head for the target dataset.

## Fine-tuning

Unfreeze some or all pretrained layers and continue training
with a suitable learning rate.

## When should you use each approach?

Feature extraction is a useful baseline when data or computing
resources are limited. Fine-tuning can adapt learned features
more closely to the target dataset.

## Conclusion

Comparing frozen and fine-tuned models helps you understand
how pretrained representations perform on your task.
