/** @param client { import("@datocms/cli/lib/cma-client-node").Client } */
module.exports = async function (client) {
  const existingItemTypes = await client.itemTypes.list();
  let simpleBlock = existingItemTypes.find(
    (itemType) => itemType.api_key === 'simple_block' && itemType.modular_block,
  );

  if (!simpleBlock) {
    console.log('Create block model "Simple block" (`simple_block`)');
    simpleBlock = await client.itemTypes.create({
      name: 'Simple block',
      api_key: 'simple_block',
      modular_block: true,
    });
  } else {
    console.log('Block "simple_block" already exists');
  }

  const existingFields = await client.fields.list(simpleBlock);
  const hasTitleField = existingFields.some((field) => field.api_key === 'title');

  if (hasTitleField) {
    console.log('Field "title" already exists in "simple_block", skipping');
    return;
  }

  console.log('Create field "Title" (`title`) in "simple_block"');
  await client.fields.create(simpleBlock, {
    label: 'Title',
    api_key: 'title',
    field_type: 'string',
    validators: { required: {} },
  });
};
