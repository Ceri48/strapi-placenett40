import type { Schema, Struct } from '@strapi/strapi';

export interface BtnLien extends Struct.ComponentSchema {
  collectionName: 'components_btn_liens';
  info: {
    displayName: 'Lien';
    icon: 'link';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    Ordre: Schema.Attribute.Integer;
    Texte: Schema.Attribute.String;
  };
}

export interface BtnLiensGroupee extends Struct.ComponentSchema {
  collectionName: 'components_btn_liens_groupees';
  info: {
    displayName: 'LiensGroupee';
    icon: 'link';
  };
  attributes: {
    Liens: Schema.Attribute.Component<'btn.lien', true>;
    Ordre: Schema.Attribute.Integer;
    Texte: Schema.Attribute.String;
  };
}

export interface SeoSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'seo.meta';
    icon: 'code';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    noindex: Schema.Attribute.Boolean & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'btn.lien': BtnLien;
      'btn.liens-groupee': BtnLiensGroupee;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
