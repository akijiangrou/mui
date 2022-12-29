<template>
  <cbx-page>
    <cbx-navbar title="Data Table" back-link="Back" />
    <cbx-block-title>测试测试啦啦啦</cbx-block-title>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
          </tr>
          <tr>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
          </tr>
          <tr>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
          </tr>
          <tr>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
          </tr>
        </tbody>
      </table>
    </div>
    <cbx-block-title>Within card</cbx-block-title>
    <div class="card data-table">
      <table>
        <thead>
          <tr>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
          </tr>
          <tr>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
          </tr>
          <tr>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
          </tr>
          <tr>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
          </tr>
        </tbody>
      </table>
    </div>
    <cbx-block-title>Selectable rows</cbx-block-title>
    <div class="data-table data-table-init card">
      <table>
        <thead>
          <tr>
            <th class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </th>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
            <th class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
              <span>In Stock</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <cbx-block-title>Tablet-only columns</cbx-block-title>
    <div class="block-header">
      <p>"Comments" column will be visible only on devices with screen width >= 768px (tablets)</p>
    </div>
    <div class="data-table data-table-init card">
      <table>
        <thead>
          <tr>
            <th class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </th>
            <th class="label-cell">Dessert (100g serving)</th>
            <th class="numeric-cell">Calories</th>
            <th class="numeric-cell">Fat (g)</th>
            <th class="numeric-cell">Carbs</th>
            <th class="numeric-cell">Protein (g)</th>
            <th class="medium-only">
              <cbx-icon
                ios="cbx:chat_bubble_text_fill"
                aurora="cbx:chat_bubble_text_fill"
                md="material:message"
              />
              Comments
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Frozen yogurt</td>
            <td class="numeric-cell">159</td>
            <td class="numeric-cell">6.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">4.0</td>
            <td class="medium-only">I like frozen yogurt</td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Ice cream sandwich</td>
            <td class="numeric-cell">237</td>
            <td class="numeric-cell">9.0</td>
            <td class="numeric-cell">37</td>
            <td class="numeric-cell">4.4</td>
            <td class="medium-only">But like ice cream more</td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Eclair</td>
            <td class="numeric-cell">262</td>
            <td class="numeric-cell">16.0</td>
            <td class="numeric-cell">24</td>
            <td class="numeric-cell">6.0</td>
            <td class="medium-only">Super tasty</td>
          </tr>
          <tr>
            <td class="checkbox-cell">
              <label class="checkbox">
                <input type="checkbox" />
                <i class="icon-checkbox"></i>
              </label>
            </td>
            <td class="label-cell">Cupcake</td>
            <td class="numeric-cell">305</td>
            <td class="numeric-cell">3.7</td>
            <td class="numeric-cell">67</td>
            <td class="numeric-cell">4.3</td>
            <td class="medium-only">Don't like it</td>
          </tr>
        </tbody>
      </table>
    </div>
    <cbx-block-title>With inputs</cbx-block-title>
    <div class="block-header">
      Such tables are widely used in admin interfaces for filtering or search data
    </div>
    <div class="card data-table">
      <table>
        <thead>
          <tr>
            <th class="input-cell">
              <span class="table-head-label">ID</span>
              <div class="input" style="width: 50px">
                <input type="number" placeholder="Filter" />
              </div>
            </th>
            <th class="input-cell">
              <span class="table-head-label">Name</span>
              <div class="input">
                <input type="text" placeholder="Filter" />
              </div>
            </th>
            <th class="input-cell">
              <span class="table-head-label">Email</span>
              <div class="input">
                <input type="email" placeholder="Filter" />
              </div>
            </th>
            <th class="input-cell">
              <span class="table-head-label">Gender</span>
              <div class="input input-dropdown">
                <select>
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>jane@doe.com</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Vladimir Kharlampidi</td>
            <td>vladimir@google.com</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jennifer Doe</td>
            <td>jennifer@doe.com</td>
            <td>Female</td>
          </tr>
        </tbody>
      </table>
    </div>
    <cbx-block-title>Within card with title and actions</cbx-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-title">Nutrition</div>
        <div class="data-table-actions">
          <cbx-link
            icon-ios="cbx:line_horizontal_3_decrease"
            icon-aurora="cbx:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <cbx-link
            icon-ios="cbx:ellipsis_vertical_circle"
            icon-aurora="cbx:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
              <th class="medium-only">
                <cbx-icon
                  ios="cbx:chat_bubble_text_fill"
                  aurora="cbx:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <cbx-block-title>Sortable columns</cbx-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-title">Nutrition</div>
        <div class="data-table-actions">
          <cbx-link
            icon-ios="cbx:line_horizontal_3_decrease"
            icon-aurora="cbx:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <cbx-link
            icon-ios="cbx:ellipsis_vertical_circle"
            icon-aurora="cbx:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell sortable-cell sortable-cell-active">Dessert (100g serving)</th>
              <th class="numeric-cell sortable-cell">Calories</th>
              <th class="numeric-cell sortable-cell">Fat (g)</th>
              <th class="numeric-cell sortable-cell">Carbs</th>
              <th class="numeric-cell sortable-cell">Protein (g)</th>
              <th class="medium-only">
                <cbx-icon
                  ios="cbx:chat_bubble_text_fill"
                  aurora="cbx:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <cbx-block-title>With title and different actions on select</cbx-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-header">
          <div class="data-table-title">Nutrition</div>
          <div class="data-table-actions">
            <cbx-link
              icon-ios="cbx:line_horizontal_3_decrease"
              icon-aurora="cbx:line_horizontal_3_decrease"
              icon-md="material:sort"
            />
            <cbx-link
              icon-ios="cbx:ellipsis_vertical_circle"
              icon-aurora="cbx:ellipsis_vertical_circle"
              icon-md="material:more_vert"
            />
          </div>
        </div>
        <div class="data-table-header-selected">
          <div class="data-table-title-selected">
            <span class="data-table-selected-count"></span> items selected
          </div>
          <div class="data-table-actions">
            <cbx-link icon-ios="cbx:trash" icon-aurora="cbx:trash" icon-md="material:delete" />
            <cbx-link
              icon-ios="cbx:ellipsis_vertical_circle"
              icon-aurora="cbx:ellipsis_vertical_circle"
              icon-md="material:more_vert"
            />
          </div>
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
              <th class="medium-only">
                <cbx-icon
                  ios="cbx:chat_bubble_text_fill"
                  aurora="cbx:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <cbx-block-title>Alternate header with actions</cbx-block-title>
    <div class="data-table data-table-init card">
      <div class="card-header">
        <div class="data-table-links"><a class="button">Add</a><a class="button">Remove</a></div>
        <div class="data-table-actions">
          <cbx-link
            icon-ios="cbx:line_horizontal_3_decrease"
            icon-aurora="cbx:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <cbx-link
            icon-ios="cbx:ellipsis_vertical_circle"
            icon-aurora="cbx:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </th>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
              <th class="medium-only">
                <cbx-icon
                  ios="cbx:chat_bubble_text_fill"
                  aurora="cbx:chat_bubble_text_fill"
                  md="material:message"
                />
                Comments
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
              <td class="medium-only">I like frozen yogurt</td>
              <td class="actions-cell">
                <cbx-link
                  icon-ios="cbx:square_pencil"
                  icon-aurora="cbx:square_pencil"
                  icon-md="material:edit"
                />
                <cbx-link icon-ios="cbx:trash" icon-aurora="cbx:trash" icon-md="material:delete" />
              </td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
              <td class="medium-only">But like ice cream more</td>
              <td class="actions-cell">
                <cbx-link
                  icon-ios="cbx:square_pencil"
                  icon-aurora="cbx:square_pencil"
                  icon-md="material:edit"
                />
                <cbx-link icon-ios="cbx:trash" icon-aurora="cbx:trash" icon-md="material:delete" />
              </td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
              <td class="medium-only">Super tasty</td>
              <td class="actions-cell">
                <cbx-link
                  icon-ios="cbx:square_pencil"
                  icon-aurora="cbx:square_pencil"
                  icon-md="material:edit"
                />
                <cbx-link icon-ios="cbx:trash" icon-aurora="cbx:trash" icon-md="material:delete" />
              </td>
            </tr>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input type="checkbox" />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
              <td class="medium-only">Don't like it</td>
              <td class="actions-cell">
                <cbx-link
                  icon-ios="cbx:square_pencil"
                  icon-aurora="cbx:square_pencil"
                  icon-md="material:edit"
                />
                <cbx-link icon-ios="cbx:trash" icon-aurora="cbx:trash" icon-md="material:delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <cbx-block-title>Collapsible</cbx-block-title>
    <div class="block-header">
      <p>The following table will be collapsed to kind of List View on small screens:</p>
    </div>
    <div class="card data-table data-table-collapsible data-table-init">
      <div class="card-header">
        <div class="data-table-title">Nutrition</div>
        <div class="data-table-actions">
          <cbx-link
            icon-ios="cbx:line_horizontal_3_decrease"
            icon-aurora="cbx:line_horizontal_3_decrease"
            icon-md="material:sort"
          />
          <cbx-link
            icon-ios="cbx:ellipsis_vertical_circle"
            icon-aurora="cbx:ellipsis_vertical_circle"
            icon-md="material:more_vert"
          />
        </div>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th class="label-cell">Dessert (100g serving)</th>
              <th class="numeric-cell">Calories</th>
              <th class="numeric-cell">Fat (g)</th>
              <th class="numeric-cell">Carbs</th>
              <th class="numeric-cell">Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="label-cell">Frozen yogurt</td>
              <td class="numeric-cell">159</td>
              <td class="numeric-cell">6.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">4.0</td>
            </tr>
            <tr>
              <td class="label-cell">Ice cream sandwich</td>
              <td class="numeric-cell">237</td>
              <td class="numeric-cell">9.0</td>
              <td class="numeric-cell">37</td>
              <td class="numeric-cell">4.4</td>
            </tr>
            <tr>
              <td class="label-cell">Eclair</td>
              <td class="numeric-cell">262</td>
              <td class="numeric-cell">16.0</td>
              <td class="numeric-cell">24</td>
              <td class="numeric-cell">6.0</td>
            </tr>
            <tr>
              <td class="label-cell">Cupcake</td>
              <td class="numeric-cell">305</td>
              <td class="numeric-cell">3.7</td>
              <td class="numeric-cell">67</td>
              <td class="numeric-cell">4.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxLink, cbxIcon } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxLink,
    cbxIcon,
  },
};
</script>
